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
>>>>>>> d64a9c61540a97d8bc22aec94faa9204d1cb10b3


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
>>>>>>> d64a9c61540a97d8bc22aec94faa9204d1cb10b3
        </div>
        //error for map function in the dashboard
        // {tudu && tudu.map((todo) => (
        //     <TodoCard key={todo._id} todo={todo} allTodo={allTodo} />
        // ))}

    );
};

export default Dashboard;
