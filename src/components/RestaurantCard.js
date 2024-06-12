import { IMG_CDN_URL } from "../config"

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRatingString }) => {
    return (
        <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 h-80 hover:bg-gray-300">
            <img className="rounded-lg w-80 h-40" src={ IMG_CDN_URL + cloudinaryImageId} /> {/* By default link only Id changes */}
            <h2 className="font-bold text-lg py-2">{name}</h2>  {/* In curly brackets because it is JS not JSX */}
            <h4 className="font-semibold">{avgRatingString} star</h4>
            <h3>{cuisines.join(", ").slice(0,54)}</h3>

        </div>
    )
}

export default RestaurantCard;


