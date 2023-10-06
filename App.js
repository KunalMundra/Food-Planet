import React from "react";
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1 className="title" key="h1">
        <a>
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

const Body = () => {
    return (
        <h4>Body</h4>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
