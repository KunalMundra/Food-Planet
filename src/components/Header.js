import { useState } from "react";
import Logo from "../assets/img/Logo.jpg"
import { Link } from "react-router-dom";

const Title = () => (
    <h1 className="title" key="h1">
        <a href="/">
            <img className="logo" alt="logo" src={Logo} />
        </a>
    </h1>
);

const Header = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            {isLoggedin ?
                <button onClick={() => setIsLoggedin(!isLoggedin)}>Login</button>
                :
                <button onClick={() => setIsLoggedin(!isLoggedin)}>Logout</button>
            }
        </div>
    );
};

export default Header;