class Api::ListingsController < ApplicationController

  def index
  end

  def show
  end

  def patch
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      render "api/listings/show"
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      sign_in(@listing)
      render "api/listings/show"
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
  end

  private

  def listing_params
    params.require(:listing).permit(:title, :host_id, :lat, :lng, :street_address,
      :city, :zip_code, :apt_num, :description, :price, :dog_walks, :deluxe_bed,
      :house_cat, :gourmet_food, :chew_toys, :frisbee, :mailman, :grooming,
      :cuddle_buddy, :indoor_poop, :indoor_pee, :barking, :whining, :begging,
      :shedding, :country, :state)
  end

end
