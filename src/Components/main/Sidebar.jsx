import React, { useState } from 'react';
import { FaSearch, FaRegStar,  FaWatchmanMonitoring } from 'react-icons/fa';


const searchHandler = (event) => {
    event.preventDefault();
    console.log('i am working')
}



export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div>
            <div>
                <img src={require("../assets/tudu.png")} alt="Logo" />
            </div>
            <form action="">
                <label htmlFor="search">
                    <input type="text" name="search" placeholder="search" />
                </label>
                <button type="submit" onClick={searchHandler}><FaSearch /></button>
            </form>
            <div>
                <button>All</button>
                <FaRegStar/>
                <button>Active</button>
                <button>Upcoming</button>
                <FaWatchmanMonitoring/>
                <button>Done</button>
            </div>
            <div className="dropdown">
                <button onClick={handleOpen}>Tags</button>
                {open ? (
                    <ul>
                        <li className="menu-item">
                            <button>Project</button>
                        </li>
                    </ul>
                ) : null}
            </div>
        </div>
    )
}
