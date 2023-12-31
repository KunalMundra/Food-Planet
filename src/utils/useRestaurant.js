import { useState, useEffect } from "react";
import useOnline from "../utils/useOnline"

const useRestaurant = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [SearchText, setSearchText] = useState();

    useEffect(() => {
        getRestaurants();
    }, [])

    const offline = useOnline();

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5116937&lng=73.80349140000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    return {offline, allRestaurants, filteredRestaurants, SearchText, setFilteredRestaurants, setSearchText};
}

export default useRestaurant;