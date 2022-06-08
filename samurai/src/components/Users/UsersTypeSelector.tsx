import React from "react";
import {Link, NavLink} from "react-router-dom";

type UsersTypeSelectorType = {
    onPageChanged:(page:number)=>void
}

const UsersTypeSelector:React.FC<UsersTypeSelectorType> = (props) => (
    <aside className='sidebar app-block'>
        <nav className='nav'>
            <ul>
                <li><NavLink onClick={()=>{props.onPageChanged(1)}} to="/friends">Friends</NavLink></li>
                <li><NavLink onClick={()=>{props.onPageChanged(1)}} to="/users">Find user</NavLink></li>
            </ul>
        </nav>
    </aside>
)
export default UsersTypeSelector;