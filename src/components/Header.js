
const Title = () => (
    <h1 className="title" key="h1">
        <a href="/">
            <img
                className="logo"
                alt="logo"
                src="https://jharkhandbihar.com/productimages/30065.jpg"
            />
        </a>
    </h1>
);

const Header = () => {
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
        </div>
    );
};

export default Header;