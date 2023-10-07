import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function filterData(SearchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant.info.name.includes(SearchText)
    )

    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
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
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
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
                        const data = filterData(SearchText, restaurants);
                        setRestaurants(data);
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;