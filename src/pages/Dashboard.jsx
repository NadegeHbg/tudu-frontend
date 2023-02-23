import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";

const Dashboard = () => {
    const [tudu, setTudu] = useState([]);
    // eslint-disable-next-line
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
            <Sidebar tudu={tudu} />
            <MiddleSection tudu={tudu} />
        </div>
        //error for map function in the dashboard
        // {tudu && tudu.map((todo) => (
        //     <TodoCard key={todo._id} todo={todo} allTodo={allTodo} />
        // ))}

    );
};

export default Dashboard;
