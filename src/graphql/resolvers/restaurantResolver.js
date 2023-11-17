import * as Restaurant from '../../controllers/restaurantController.js'

export default {
    Query:{
        getRestaurantList:async (_,args)=>{
           return await Restaurant.getRestaurantList(args)
        }
    }
}