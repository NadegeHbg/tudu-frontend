import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";

const Dashboard = () => {
    const [tudu, setTudu] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [selectedArray, setSelectedArray] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const data = Cookies.get("id");
            setTudu(await GetTodos(data));
        }
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar tudu={tudu} setTudu={setTudu} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            <MiddleSection tudu={tudu} selectedFilter={selectedFilter}/>
        </div>
        //error for map function in the dashboard
        // {tudu && tudu.map((todo) => (
        //     <TodoCard key={todo._id} todo={todo} allTodo={allTodo} />
        // ))}

    );
};

export default Dashboard;
