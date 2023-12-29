import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    // whenever state variable changes react will rerender the current whole header omponent 
    // but only the button changes(because of reconcilliation algo)
    const [btnName, setBtnName] = useState("Login");
    // without dependency array useEffect will be called after every render
    // with empty dependency array useEffect will be called only once after the first render
    // with dependency array useEffect will be called after every render if any of the dependency changes
    useEffect(() => {
        console.log("hi");
    },[]);
    const isOnline = useOnlineStatus();
    return (
        <div className='flex justify-between bg-yellow-200 shadow-lg mb-2 sm:bg-pink-200 lg:bg-green-200'>
            <div className='logo-container' style={{margin: "10px"}}>
                <img className='w-32' src={LOGO_URL} />
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4"> Online Status: {isOnline ?  "✅" : "🔴"} </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => {
                        if(btnName === "Login") setBtnName("Logout");
                        else setBtnName("Login");
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;