import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";

const Dashboard = () => {
    const [tudu, setTudu] = useState([]);
<<<<<<< HEAD
    const [selectedFilter, setSelectedFilter] = useState([]);
=======
    // eslint-disable-next-line
    const [selectedArray, setSelectedArray] = useState([]);
>>>>>>> ff990236dcd54d65b6240178866842d2f5905a8c


    useEffect(() => {
        async function fetchData() {
            const data = Cookies.get("id");
            setTudu(await GetTodos(data));
        }
        fetchData();
    }, []);

    return (
        <div className="flex">
<<<<<<< HEAD
            <Sidebar tudu={tudu} setTudu={setTudu} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            <MiddleSection tudu={tudu} selectedFilter={selectedFilter}/>
=======
            <Sidebar tudu={tudu} />
            <MiddleSection tudu={tudu} />
>>>>>>> ff990236dcd54d65b6240178866842d2f5905a8c
        </div>
        //error for map function in the dashboard
        // {tudu && tudu.map((todo) => (
        //     <TodoCard key={todo._id} todo={todo} allTodo={allTodo} />
        // ))}

    );
};

export default Dashboard;
