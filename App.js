import React from "react";
import ReactDOM from "react-dom/client"

const heading = (
    <h1 id="title" key="h1">
        Hi Kunal
    </h1>
);

const Header = () => {
    return (
        <div>
            {heading}
            <h1 id="title" key="h1">
                Hi Kunal
            </h1>
            <h2>
                What is your name?
            </h2>
        </div>

    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
