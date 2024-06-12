import Logo from "../assets/img/Logo.png"
import { Link } from "react-router-dom";
import useLogin from "../utils/useLogin";


const Title = () => (
    <h1 className="title" key="h1">
        <a href="/">
            <img className="w-28" alt="logo" src={Logo} />
        </a>
    </h1>
);

const Header = () => {
    const loginButton = useLogin();

    return (
        <div className="flex justify-between bg-yellow-200 items-center">
            <Title />
            <div>
                <ul className="flex p-4 space-x-6 ">
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