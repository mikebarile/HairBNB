## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - TopBar
 - Footer

**ListingsContainer**
 - DatesFilter
 - PriceFilter
 - ListingsIndex
  + ListingIndexItem
  + ResultNav
 - Map

**ListingContainer**
 - ListingHost
 - ListingGuest

**BookingsContainer**
 - Listing
  + BookingsIndex
   + BookingsIndexItem

**TripsContainer**
 - UpcomingTripsHeader
 - TripsIndex
  + TripsIndexItem

**NewListingContainer**
 - NewListingHome
 - NewListingFormOne
 - NewListingFormTwo
 - NewListingFormThree

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/listings/" | "ListingsContainer" |
| "/listings/:listing_id" | "ListingContainer" |
| "/my-listings" | "BookingsContainer" |
| "/my-trips" | "TripsContainer" |
| "/add-a-listing/**" | "NewlistingContainer" |
