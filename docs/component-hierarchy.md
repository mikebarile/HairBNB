## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - TopBar
 - Footer

**ListingsContainer**
 - DatesFilter
 - PriceFilter
 - Listings
  + ListingResult
  + ResultNav
 - Map

**ListingContainer**
 - ListingHost
  + Image
  + PriceHost
  + PendingBookings
    + PendingBookingResult
  + UpcomingBookings
    + UpcomingBookingResult
  + RemoveListingButton
  + ListingDescription
  + ListingAmenities
   + Amenity
  + ListingRules
   + Rule
  + ListingReviews
   + Review
 - ListingGuest
  + Image
  + CheckIn
   + Price
   + Info
   + PriceInfo
   + BookButton
    + ConfirmationPopup
  + ListingDescription
  + ListingAmenities
   + Amenity
  + ListingRules
   + Rule
  + ListingReviews
   + Review
   + AddReviewButton
    + AddReviewForm

**BookingsContainer**
 - Listing
  + PendingBookings
   + PendingBooking
  + UpcomingBookings
   + UpcomingBooking

**TripsContainer**
 - UpcomingTripsHeader
 - Trips
  + Trip

**NewListingContainer**
 - NewListingHome
 - NewListingOne
 - NewListingTwo
 - NewListingThree

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
