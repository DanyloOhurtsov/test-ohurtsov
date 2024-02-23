import React from "react";
import Filter from "./filter";

const Header = (props) => {
    return (
        <div className=" flex items-center justify-center relative p-4">
            <p className=" uppercase font-bold">Lifts list</p>
            <Filter props={props} />
        </div>
    );
};

export default Header;
