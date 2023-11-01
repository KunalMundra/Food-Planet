import { useState } from "react";

const login = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);

    if (isLoggedin) 
    { 
        return <button onClick={() => setIsLoggedin(!isLoggedin)}>Login</button> 
    }
    else {
        return <button onClick={() => setIsLoggedin(!isLoggedin)}>Logout</button>
    }


}

export default login;