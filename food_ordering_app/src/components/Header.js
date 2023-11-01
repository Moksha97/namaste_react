import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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
    return (
        <div className='header'>
            <div className='logo-container' style={{margin: "10px"}}>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
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