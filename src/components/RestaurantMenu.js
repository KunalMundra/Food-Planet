import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const {restaurant, menu } = useRestaurantMenu(resId);

    return  (!restaurant || !menu) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restaurant Id : {resId} </h1>
                <h1> <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} height={400} width={400} /> </h1>
                <h1>{restaurant?.name}</h1>
                <h1>{restaurant?.city}</h1>
                <h1>{restaurant?.areaName}</h1>
                <h1>{restaurant?.avgRating}</h1>
            </div>
            <div>
                <h2>Menu</h2>
                <ul>
                    {
                        Object.values(menu?.itemCards).map((item) => (
                            <li key={item?.card?.info?.id} >{item?.card?.info?.name}</li>
                        )) 
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;