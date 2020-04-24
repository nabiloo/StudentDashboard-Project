import React from "react"
import { NavLink } from "react-router-dom";

const Footer = ({ studentNames }) => {

    return (
        <div className="Footer">
            <h1>See individual data of students</h1>
            {studentNames.map((name, index) => <button className={"StudentFooterButtons"} key={index}>
                <NavLink className={"StudentFooterButtons"} to={"/" + name}>{name}</NavLink></button>)}
        </div>
    )
}


export default Footer