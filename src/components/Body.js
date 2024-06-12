import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {

    const {offline, allRestaurants, filteredRestaurants, SearchText,setFilteredRestaurants, setSearchText} = useRestaurant();

    if(!offline){
        return <h1>uh oh! you are offline</h1>
    }

    if (!allRestaurants) return null;

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="m-4 p-4">
                <input
                    type="text"
                    className="border border-solid border-black"
                    placeholder="Search"
                    value={SearchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="px-4 py-0.5 bg-green-200 mx-4 rounded-lg"
                    onClick={() => {
                        const data = filterData(SearchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >Search</button> 

            </div>
            <div className="flex flex-wrap">

                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={"/restaurant/" + restaurant.info.id}>
                            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                        </Link>
                    })
                }
            </div>
        </>
    )
}

export default Body;