import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);
    useEffect(() => {

        //api call
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5116937&lng=73.80349140000001&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json?.data)
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    }
    return  (!restaurant || !menu) ? <Shimmer /> : (
        <div className="menu">
            <div>
                <h1>Restaurant Id : {resId} </h1>
                <h1> <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} height={400} width={400} /> </h1>
                <h1>{restaurant.name}</h1>
                <h1>{restaurant.city}</h1>
                <h1>{restaurant.areaName}</h1>
                <h1>{restaurant.avgRating}</h1>
            </div>
            <div>
                <h2>{menu?.title}</h2>
                <ul>
                    {
                        Object.values(menu?.itemCards).map((item) => (
                            <li key={item.card.info.id} >{item.card.info.name}</li>
                        )) 
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;