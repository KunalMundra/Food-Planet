import { useState } from "react";
import Logo from "../assets/img/Logo.jpg"

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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