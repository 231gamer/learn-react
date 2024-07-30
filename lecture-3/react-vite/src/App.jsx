import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import ReactFacts from "./components/ReactFacts";

const App = () => {
    return (
        <div className="container">
            <Nav />
            <Main />
            <ReactFacts />
        </div>
    )
}

export default App