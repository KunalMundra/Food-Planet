import { IMG_CDN_URL } from "../config"

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRatingString }) => {
    return (
        <div className="Card">
            <img src={ IMG_CDN_URL + cloudinaryImageId} /> {/* By default link only Id changes */}
            <h2>{name}</h2>  {/* In curly brackets because it is JS not JSX */}
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRatingString} star</h4>
        </div>
    )
}

export default RestaurantCard;


