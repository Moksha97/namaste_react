import RestaurantCard from "./RestaurantCard"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// RestaurantList is JSON Data for displaying cards

const Body = () => {
    // Hooks
    // state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] =  useState([]);
    const [filteredRestaurant, setFilteredRestaurant] =  useState([]);
    const [searchText, setSearchText] = useState("");
    // whenever the state variable update, react triggers a reconcilliation cycle(re renders the component)
    console.group("Body Rendered");
    // useeffect with two arguments callback function & dependency array
    // callback function is called after rendering the component
    useEffect(() => {
        console.log("useEffect called");
        fetchData();
    }, []);

    // use async, await to resolve the promise instead of promise.then()
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // optional chaining is putting ? ? ?
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
            <div className='filter'>
                <div className="search">
                    {/* whenever we are typing and input is tied to state variable then react re renders the component 
                    and updates only the input value since there is only change in input (using diff b/w the two virtual dom is compared) */}
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}/>
                    <button onClick={() => {
                        console.log(searchText);
                        setFilteredRestaurant(listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className='res-container'>
              {filteredRestaurant && filteredRestaurant.map((restaurant) => (
                <Link 
                    key={restaurant?.info?.id}
                    to={"/restaurants/"+ restaurant.info.id}>
                    <RestaurantCard  resData = {restaurant}/>
                </Link>
              ))}
            </div>
        </div>
    )
}

export default Body;