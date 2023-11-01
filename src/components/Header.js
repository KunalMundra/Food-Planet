import Logo from "../assets/img/Logo.jpg"
import { Link } from "react-router-dom";
import useLogin from "../utils/useLogin";


const Title = () => (
    <h1 className="title" key="h1">
        <a href="/">
            <img className="logo" alt="logo" src={Logo} />
        </a>
    </h1>
);

const Header = () => {
    const loginButton = useLogin();

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/cart">Cart</Link></li>
                    <li> <Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            {loginButton}
        </div>
    );
};

export default Header;