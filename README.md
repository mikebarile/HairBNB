# HairBNB

[HairBNB live][site]

[site]: http://www.hairbnb.xyz

HairBNB is a full-stack web application inspired by AirBNB.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Rendering listings

  On the database side, HairBNB is split into several tables: users, listings, bookings, and reviews. Upon entering the site, the app immediately queries the database to pull the "top 3" HairBNB picks and render them to the page. Otherwise, the database renders dynamically depending on which page you're viewing. For example, the database makes a get call to  "api/listings/:id" when you enter a listing show page.

  Bookings are stored with basic information on check-in and check-out as well as the guest, host, and listing IDs. It also has a 'status' property that is set to "pending" by default and is currently not in use. Reviews have a similarly simple structure: a listing id, a guest id, a description, and a rating. Listings have methods defined in their class that allows them to carry information on reviews: the average review rating and the number of reviews. When a user enters the show page and the app makes a request to the database, the database returns both the listing and the listing's reviews in one listing object. This enables the app to avoid querying multiple times.

### Adding a listing
  Adding a listing is broken up into three separate forms: "start with the basics", "set the scene", and "get ready for pups". Each of these forms captures key listing information from the user and saves it to the global store in real time. Because the data is stored globally, users can leave this section and come back without losing their data (unless they refresh). In addition, the add a listing "home page" updates dynamically based on what section of the form the user is in.

  The forms themselves were modeled on AirBNB's add a listing forms. Interesting features include a character counter in the first form that turns red when the user is approaching the character limit. This feature is backed up by error handling on the "next button". The second form has dynamic buttons that were hand-designed. The third form pings Google when the user tries to submit a listing to ensure the listing has a valid address. If it doesn't the form throws an error and asks the user to correct their address.

### Search
  HairBNB utilizes simple search functionality backed by Google Maps' API. When a user selects a location in one of the two search bars, the app pings Google Maps which passes geocoordinates as props to the search page. The search page is then able to dynamically shift the center of the map based on the user's query. In addition, the map's bounds are used to limit what listings the user can see. If the user shifts the map, a different set of listings will appear based on the map bounds. A maximum of 18 listings are shown to the viewer in this way.

## Future Directions for the Project
  In addition to the features already implemented, I plan to continue work on this project.  The next steps for HairBNB are outlined below.

### Profiles
  Profiles are a standard feature on AirBNB and help guests learn a little more about the person hosting them. I will add a profiles section that allows the user to share this information with other users they interact with.

### Listing search features
  There are several features that would make great additions to listing search. One feature I would like to add is "clickable markers" that allow the user to click a marker on the map to learn more about that listing. I also plan to add customized icons that reflect the listing price and enhance the CSS styling on the left side of the page.
