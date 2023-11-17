import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

/**
 *
 * @param {*} filter
 * @param {*} category
 * @param {*} skip
 * @param {*} take
 * @returns
 */

export const getRestaurantList = async (args) => {
  try {
    //filter
    const { filter, category, skip, take } = args;

    let where = {};
    if (filter) {
      where = { ...filter };
    }
    if (category) {
      where = {
        ...where,
        propono_sub_categories: {
          hasSome: category.propono_sub_categories,
        },
      };
    }

    //query
    let result = await Prisma.proponoPlaces.findMany({
      where: where,
      skip:skip?skip:0,
      take:take?take:10,
      select: {
        id: true,
        poi_name: true,
        operating_hours: false,
        price_range: true,
        street_address_1: false,
        street_address_2: false,
        city: false,
        state: false,
        postal_code: true,
        country: false,
        full_address: true,
        neighborhood: false,
        latitude: true,
        longitude: false,
        plus_code: true,
        time_zone: true,
        operational_status: true,
        telephone: true,
        email: false,
        website: true,
        google_place_url: true,
        google_place_id: true,
        yelp_place_url: false,
        yelp_place_id: false,
        tripadvisor_place_url: false,
        tripadvisor_place_id: false,
        opentable_place_url: false,
        opentable_place_id: false,
        google_rating: true,
        google_no_ratings: true,
        opentable_rating: false,
        opentable_no_ratings: false,
        yelp_rating: false,
        yelp_no_ratings: false,
        tripadvisor_rating: false,
        tripadvisor_no_ratings: false,
        facebook_rating: false,
        facebook_no_ratings: false,
        propono_weighted_rating: false,
        propono_total_no_ratings: false,
        propono_primary_category: false,
        propono_sub_categories: true,
        google_mapped_categories: false,
        opentable_mapped_categories: true,
        yelp_mapped_categories: true,
        tripadvisor_mapped_categories: true,
        atmosphere_romantic: false,
        atmosphere_cozy: false,
        atmosphere_view: false,
        atmosphere_hot_spot: false,
        atmosphere_dressy: false,
        atmosphere_upscale: false,
        atmosphere_casual: false,
        diet_healthy: false,
        diet_vegetarian_friendly: false,
        diet_vegan_options: false,
        diet_gluten_free_options: false,
        diet_halal: false,
        diet_kosher: false,
        diet_keto: false,
        diet_pescatarian: false,
        entertain_full_bar: false,
        entertain_beer_wine: false,
        entertain_happy_hour: false,
        entertain_music: false,
        entertain_live_music: false,
        entertain_dancing: false,
        entertain_karaoke: false,
        type_restaurant: false,
        type_bakery: false,
        type_bars_nightlife: false,
        type_coffee_tea: false,
        type_dessert: false,
        type_specialty_food: false,
        general_no_smoking: false,
        general_parking_available: false,
        general_wheelchair_accessible: true,
        // general_wi_fi:false,
        general_outdoor_seating: false,
        general_dog_friendly: false,
        good_kids: false,
        good_groups: false,
        good_dining_solo: true,
        good_working: false,
        meals_breakfast: false,
        meals_brunch: false,
        meals_lunch: false,
        meals_dinner: false,
        meals_quick_bites: false,
        meals_dessert: false,
        meals_late_night: false,
        payment_credit_cards: false,
        payment_discover: false,
        payment_mastercard: false,
        payment_visa: false,
        payment_amex: false,
        payment_cash_only: false,
        payment_digital: false,
        menu_link: true,
        reservation_link: false,
        order_links: true,
        poi_description: true,
        poi_keywords: true,
        propono_search_categories: true,
      },
    });

    // console.log("result", result);
    return result;
  } catch (error) {
    console.log("getBooks Error", error);
    return new Error(error);
  }
};
