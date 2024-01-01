import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"; 
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// RestaurantList is JSON Data for displaying cards

const Body = () => {
    // Hooks
    // state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] =  useState([]);
    const [filteredRestaurant, setFilteredRestaurant] =  useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    // whenever the state variable update, react triggers a reconcilliation cycle(re renders the component)
    console.group("Body Rendered");
    // useeffect with two arguments callback function & dependency array
    // callback function is called after rendering the component
    useEffect(() => {
        console.log("useEffect called");
        fetchData();
    }, []);

    const { loggedInUser, setUserName } = useContext(UserContext);

    // use async, await to resolve the promise instead of promise.then()
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // optional chaining is putting ? ? ?
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants);
    };

    const isOnline = useOnlineStatus();

    if(!isOnline) {
        console.log("You are offline");
        return (
            <div className='body'>
                <h1> You are offline. Please check your internet connection </h1>
            </div>
        )
    }

    // conditional rendering
    return listOfRestaurants?.length === 0 ? (<Shimmer />) : (
        <div className='body'>
            <div className='filter flex items-center'>
                <div className="search m-4 p-4">
                    {/* whenever we are typing and input is tied to state variable then react re renders the component 
                    and updates only the input value since there is only change in input (using diff b/w the two virtual dom is compared) */}
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        console.log(searchText);
                        setFilteredRestaurant(listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                </div>
                <div className="search m-4 p-4">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                        Top Rated Restaurant
                    </button>
                </div>
                <div className="search m-4 p-4">
                    <label> UserName </label>
                    <input value={loggedInUser} className="border border-black p-2" onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className='flex flex-wrap'>
              {filteredRestaurant && filteredRestaurant.map((restaurant) => (
                <Link 
                    key={restaurant?.info?.id}
                    to={"/restaurants/"+ restaurant.info.id}>
                    {
                        restaurant?.data?.promoted ? <RestaurantCardPromoted resData = {restaurant}/> : <RestaurantCard  resData = {restaurant}/>
                    }
                </Link>
              ))}
            </div>
        </div>
    )
}

export default Body;