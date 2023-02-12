import React, { useState } from 'react';
import { FaSearch, FaRegStar, FaRegBell, FaTag, FaRegCalendar} from 'react-icons/fa';
import { InboxStackIcon } from "@heroicons/react/24/solid";


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
                <div>
                <InboxStackIcon/>
                    <button>All</button>
                </div>
                <div>
                    <FaRegStar />
                    <button>Active</button>
                </div>
                <div>
                    <FaRegCalendar />
                    <button>Upcoming</button>
                </div>
                <div>
                    <FaRegBell />
                    <button>Done</button>
                </div>
            </div>
            <div className="dropdown">
                <FaTag />
                <button onClick={handleOpen}>Tags</button>
                {open ? (
                    <ul>
                        <li className="menu-item">
                            <button>Project</button>
                        </li>
                    </ul>
                )|| <p>You do not have any todo</p> : null}
            </div>
        </div>
    )
}
