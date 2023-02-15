import { useEffect, useState } from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";

const Dashboard = () => {
    const [tudu, setTudu] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = Cookies.get("id");
            setTudu(await GetTodos(data));
        }
        fetchData();
    }, []);

    return (
        <div className="flex justify-between">
            <Sidebar />
            <MiddleSection />
        </div>
    );
};

export default Dashboard;
