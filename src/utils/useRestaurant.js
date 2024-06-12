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
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.518467248959915&lng=73.81702568382025")
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setAllRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

    }

    return {offline, allRestaurants, filteredRestaurants, SearchText, setFilteredRestaurants, setSearchText};
}

export default useRestaurant;