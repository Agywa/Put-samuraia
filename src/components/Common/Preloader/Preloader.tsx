import React from "react";
import load from "../../../assets/images/load.svg";

let Preloader = () => {
    return <div style={{backgroundColor: "white"}}>
        <img src={load}/>
    </div>
}
export default Preloader;