import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState({});
    useEffect(() => {

        //api call
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5116937&lng=73.80349140000001&restaurantId=14548&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json?.data.cards[0]?.card?.card?.info)
        setRestaurant(json?.data.cards[0]?.card?.card?.info)

    }
    return (
        <div>
            <h1>Restaurant Id : {resId} </h1>
            <h1> <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} height={200} width={200}/> </h1>
            <h1>{restaurant.name}</h1>
            <h1>{restaurant.city}</h1>
            <h1>{restaurant.areaName}</h1>
            <h1>{restaurant.avgRating}</h1>
            
        </div>
    )
}

export default RestaurantMenu;