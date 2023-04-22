import React from "react";
import "./header.css";
import {Link} from 'react-router-dom';
const header = () =>{
    return (
        <nav className="head">
            <div>
                <Link to='/shop'>Shop</Link>
            </div>
        </nav>
    )
}
export default header;
