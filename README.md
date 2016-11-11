# HairBNB

[HairBNB live][site]

[site]: http://www.hairbnb.xyz

HairBNB is a full-stack web application inspired by AirBNB.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Rending listings

  On the database side, HairBNB is split into several tables: users, listings, bookings, and reviews. Upon entering the site, the app immediately queries the database to pull the "top 3" HairBNB picks and render them to the page. Otherwise, the database renders dynamically depending on which page you're viewing. For example, the database makes a get call to  "api/listings/:id" when you enter a listing show page. Of note, the search bars are backed by Google's geolocation API. When a location is selected, geocoordinates are passed as props to the search page which are then used to fetch relevant listings from the database.

  Bookings are stored with basic information on check-in and check-out as well as the guest, host, and listing IDs. It also has a 'status' property that is set to "pending" by default and is currently not in use. Reviews have a similarly simple structure: a listing id, a guest id, a description, and a rating. Listings have methods defined in their class that allows them to carry information on reviews: the average review rating and the number of reviews. When a user enters the show page and the app makes a request to the database, the database returns both the listing and the listing's reviews in one listing object. This enables the app to avoid querying multiple times.

### Adding a listing
  


### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for FresherNote are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between FresherNote users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
