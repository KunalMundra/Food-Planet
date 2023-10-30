import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(SearchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase()?.includes(SearchText)
    )

    return filterData;
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [SearchText, setSearchText] = useState();

    useEffect(() => {

        //api call
        getRestaurants();
    }, [])

    console.log("render");

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5116937&lng=73.80349140000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    if (!allRestaurants) return null;

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="input-container"
                    placeholder="Search"
                    value={SearchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    onClick={() => {
                        const data = filterData(SearchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >Search</button>

            </div>
            <div className="restaurant-list">

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