import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";

const Dashboard = () => {
    const [tudu, setTudu] = useState([]);
    const [allTodo, setAllTodo] = useState(false);

    const handleClick = (newValue) => {
        setAllTodo(newValue)
    }

    useEffect(() => {
        async function fetchData() {
            const data = Cookies.get("id");
            setTudu(await GetTodos(data));
        }
        fetchData();
    }, []);

    return (
        <div className="flex">
            <Sidebar allTodo={allTodo} handleClick={handleClick} />
            <MiddleSection tudu={tudu} allTodo={allTodo}/>
        </div>
        //error for map function in the dashboard
            // {tudu && tudu.map((todo) => (
            //     <TodoCard key={todo._id} todo={todo} allTodo={allTodo} />
            // ))}
        
    );
};

export default Dashboard;
