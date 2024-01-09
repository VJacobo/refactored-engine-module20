// import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
//import main App doc
import App from "./App";

// render app inside root element in html document and react strict mode for additional runtime checks
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
// specify the root element in the html document where the React app will be rendered
    document.getElementById('root')
);