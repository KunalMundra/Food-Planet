import Star from "../assets/img/star.png"
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const { restaurant, menu } = useRestaurantMenu(resId);

    const categories = menu?.filter(
        (c) =>
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories)

    return (!restaurant || !menu) ? <Shimmer /> : (
        <div className=" items-center md:container md:mx-auto px-80">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold mt-6 text-xl text-left">{restaurant?.name}</h1>
                    <h3 className="text-left text-sm text-gray-500">{restaurant?.cuisines.join(", ")}</h3>
                    <h3 className="text-left text-sm  text-gray-500">{restaurant?.areaName}</h3>
                    <h3 className="text-left text-sm  text-gray-500 mt-6">{restaurant?.feeDetails?.message}</h3>
                </div>

                <div className="box-border h-20 w-20 p-3 mt-7 border-4 items-center">
                    <div className="flex">
                        <h2 className="text-sm ml-1">{restaurant?.avgRatingString} </h2>
                        <img className="h-4 w-4 ml-1" src={Star} />
                    </div>
                    <hr></hr>
                    <h3 className="text-[10px] mt-1 text-center">{restaurant?.totalRatingsString}</h3>
                </div>
            </div>
            <hr className="mt-1"></hr>
            <div>
                <h1 className=" font-semibold text-left text-gray-700">{restaurant?.costForTwoMessage}</h1>
            </div>
            <div>
                {categories?.map((category) => (
                    <RestaurantCategory />
                ))}

            </div>
        </div>
    )
}

export default RestaurantMenu;