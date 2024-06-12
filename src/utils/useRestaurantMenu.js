import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        async function getRestaurantInfo() {
            try {
                const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5116937&lng=73.80349140000001&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER")
                const json = await data.json();
                console.log(json?.data)
                setRestaurant(json?.data?.cards[0]?.card?.card?.info)
                // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
                console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

                // setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
                setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        }

        getRestaurantInfo();
    }, [resId]);

    return { restaurant, menu };
}

export default useRestaurantMenu;
