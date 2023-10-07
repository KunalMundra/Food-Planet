import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [SearchText, setSearchText] = useState();

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
                <button>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurantList.map((restaurant) => {
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                    })
                }
            </div>
        </>
    )
}

export default Body;