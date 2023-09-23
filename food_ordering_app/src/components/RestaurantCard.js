import { CDN_URL } from "../utils/constants"; //named import
const RestaurantCard = (props) => {
    const styleCard = {
        backgroundColor: "#f0f0f0",
    }
    console.log(props);
    // destructuring
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
    
    return (
        <>
            <div className='res-card' style={styleCard}>
                <img className='res-logo' 
                src={ CDN_URL + cloudinaryImageId }
                />
                <h3>{name}</h3>
                <h4 style={{wordWrap: "break-word"}}>{cuisines.join(",")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo/100}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </>
    )
}



export default RestaurantCard;