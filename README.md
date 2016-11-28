# HairBNB

[HairBNB live][site]

[site]: http://www.hairbnb.xyz

![Hairbnb Homepage](https://res.cloudinary.com/dsguwnfdw/image/upload/v1480290632/Screen_Shot_2016-11-27_at_3.40.20_PM_qjs3y6.png)

HairBNB is a full-stack web application inspired by AirBNB.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Rendering listings

  On the database side, HairBNB is split into several tables: users, listings, bookings, and reviews. Upon entering the site, the app immediately queries the database to pull the "top 3" HairBNB picks and render them to the page. Otherwise, the database renders dynamically depending on which page you're viewing. For example, the database makes a get call to  "api/listings/:id" when you enter a listing show page.

  Bookings are stored with basic information on check-in and check-out as well as the guest, host, and listing IDs. It also has a 'status' property that is set to "pending" by default and is currently not in use. Reviews have a similarly simple structure: a listing id, a guest id, a description, and a rating. Listings have methods that allow them to carry reviews metadata: the average review rating and the number of reviews. When a user enters the show page and the app makes a request to the database, the database returns both the listing and the listing's reviews in one listing object. This enables the app to avoid querying multiple times.

  The logic that renders the number of review stars is actually relatively complex. I've included a code snippet below that illustrates how I've managed it for the "show listing" pages. Note that I have separate images for full, half full, and empty stars:
  ```
  handleStars(rating, className) {
    let stars = [];

    if (rating === null || rating === undefined || rating === 0) {
      for (var i = 0; i < 5; i++) {
        stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_68,w_68,x_5,y_2/v1478139574/Icons/Screen_Shot_2016-11-02_at_7.19.10_PM.png"/>);
      }
      return stars;
    }

    rating = (Math.round(rating * 2) / 2).toFixed(1);

    for (var i = 1; i <= rating; i++) {
      stars.push(<img key={i} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_3,y_2/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.12.47_PM.png"/>);
    }
    if (rating - Math.floor(rating) === 0.5){
      stars.push(<img key={i+10} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_70,w_70,x_7/v1478139260/Icons/Screen_Shot_2016-11-02_at_7.13.12_PM.png"/>);
    }
    for (var i = stars.length; i < 5; i++) {
      stars.push(<img key={i+20} className={className} src="http://res.cloudinary.com/dsguwnfdw/image/upload/c_crop,h_68,w_68,x_5,y_2/v1478139574/Icons/Screen_Shot_2016-11-02_at_7.19.10_PM.png"/>);
    }
    return stars;
  }
  ```

### Adding a listing
  Adding a listing is broken up into three separate forms: "start with the basics", "set the scene", and "get ready for pups". Each of these forms captures key listing information from the user and saves it to the global store in real time. Because the data is stored globally, users can leave this section and come back without losing their data (unless they refresh). In addition, the add a listing "home page" updates dynamically based on what section of the form the user is in. This logic was relatively complex and I've included a code snippet below:
  ```
  handleButton(step, element) {
    let form = this.props.listingFormState.current_form;
    switch (step) {
      case "start-with-basics":
        if (form === "home" || form === "start-with-basics") {
          return `${element}-next`;
        }
        else {
          return `${element}-previous`;
        }
      case "set-the-scene":
        if (form === "home" || form === "start-with-basics") {
          return `${element}-dead`;
        }
        else if (form === "set-the-scene") {
          return `${element}-next`;
        }
        else {
          return `${element}-previous`;
        }
      case "ready-for-pups":
        if (form === "ready-for-pups") {
          return `${element}-next`;
        }
        else {
          return `${element}-dead`;
        }
      default:
        console.log("Button handler is broken");
        return null;
    }
  }
  ```

  The forms themselves were modeled after AirBNB's "add a listing" forms. One notable feature is a character counter in the first form that turns red when the user is approaching the character limit. This feature is backed up by error handling on the "next button". The second form has dynamic buttons that were hand-designed. The third form pings Google when the user tries to submit a listing to ensure the listing has a valid address. If it doesn't the form throws an error and asks the user to correct their address. The final form submission process is relatively complex in that it relies on both the handleNextClick function and the componentDidUpdate React callback. I've included code snippets below of both to illustrate the form submission logic:
  ```
  handleNextClick(e) {
    e.preventDefault;
    let state = this.props.listingFormState;
    if (state.zip_code <= 0 || state.zip_code >99999 || state.zip_code.length !== 5) {
      this.setState({zipError: ["Invalid zip code"]});
    }
    else {
      this.setState({zipError: []});
    }
    if (!(state.price > 0 && state.price < 10000)) {
      this.setState({priceError: ["Price must be greater than $0.00 and less than $10,000"]});
    }
    else {
      this.setState({priceError: []});
    }
    if (state.street_address !== "" &&
      state.city !== "" && state.state !== null &&
      state.zip_code > 0 && state.zip_code <= 99999 && state.zip_code.length === 5 &&
      state.price > 0 && state.price < 10000) {
        this.props.fetchCoords(state.street_address, state.city, state.state, state.zip_code, state.country);
        this.setState({clicked: true});
    }
  }

  componentDidUpdate() {
    let state = this.props.listingFormState;

    if (state.clicked === true) {
      if (state.lat === null || state.lng === null) {
        this.setState({addressError: ["Invalid address, please try again"]});
        this.props.updateListingForm({clicked: false});
      }
      else {
        this.setState({addressError: []});
      }
    }

    if (this.props.currentUser === null){
      this.props.router.replace('/home');
    }

    if(state.title !== "" &&
      state.host_id !== null &&
      state.lat !== null &&
      state.lng !== null &&
      state.street_address !== "" &&
      state.city !== "" &&
      state.zip_code !== "" &&
      state.state !== "" &&
      state.image_url !== null &&
      state.description !== "" &&
      state.price !== "" &&
      state.zip_code > 0 && state.zip_code <= 99999 && state.zip_code.length === 5 &&
      state.price > 0 && state.price <= 10000 &&
      this.state.zipError.length === 0 && this.state.priceError.length === 0 &&
      this.state.addressError.length === 0){
        this.props.createListing(state);
        this.props.clearListingForm();
        this.props.router.push('/my-listings');
    }
  }

  ```

### Search
  HairBNB utilizes simple search functionality backed by Google Maps' API. When a user selects a location in one of the two search bars, the app pings Google Maps which passes geocoordinates as props to the search page. The search page is then able to dynamically shift the center of the map based on the user's query. In addition, the map's bounds are used to limit what listings the user can see. If the user shifts the map, a different set of listings will appear based on the map bounds. A maximum of 18 listings are shown to the viewer in this way.

  Below is the code that manages the listings generated upon entering the search page (or choosing a new address):
  ```
  componentWillReceiveProps(newProps) {
    if (this.props.lat !== newProps.lat && this.props.lng !== newProps.lng){
      this.map.setOptions({
        center: {lat: parseFloat(newProps.lat), lng: parseFloat(newProps.lng)},
        zoom: 13
      });
    }
  }
  ```

## Future Directions for the Project
  In addition to the features already implemented, I plan to continue work on this project.  The next steps for HairBNB are outlined below.

### Profiles
  Profiles are a standard feature on AirBNB and help guests learn a little more about the person hosting them. I will add a profiles section that allows the user to share this information with other users they interact with.

### Date search
  The "dates" fields in the home page and search pages currently have no functionality. In the future, I'd like to add functionality so that these fields filter the search results to only include listings that aren't already booked. In addition, I'd like to add functionality that keeps users from double-booking the same listing.

### My reservations
  I will build a page that allows Hairbnb hosts to manage reservations at their listings. Currently, all Hairbnb bookings are instantly approved; in the future, a host will have the ability to approve or deny reservations.

### Listing search features
  There are several features that would make great additions to listing search. One feature I would like to add is "clickable markers" that allow the user to click a marker on the map to learn more about that listing. I also plan to add customized icons that reflect the listing price and enhance the CSS styling on the left side of the page.
