import { useEffect, useState} from "react";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";
import MiddleSection from "../Components/main/MiddleSection";
import MainFrame from "../Components/main/MainFrame";
import HeaderDashboard from "../Components/header/headerDashboard";

const Dashboard = () => {

    // get all tudu from back end store it here. even filtered tudu is stored here
    const [tudu, setTudu] = useState([]);
    const [view, setView] = useState(localStorage.getItem('view') === 'true' || true);
    const userId = Cookies.get('id');
    const [options, setOptions] = useState([]);


    
    // eslint-disable-next-line
    useEffect(() => {

        async function fetchData() {
            setTudu(await GetTodos(userId));
            if(tudu.length>0){
                const newArray = tudu.map((obj) => {
                    return { category: obj.category };
                });
                const categoryArray = [...new Set(newArray.map((item) => item.category))];
                setOptions( categoryArray.map((item) => {
                    return {
                    value: item,
                    label: item,
                    };
                }))
            }else setOptions ([{value: 'Personal', label: 'Personal'},{value: 'Buisiness', label: 'Buisiness'}])
        }
        fetchData();
        if (localStorage.getItem('view') !== null) {
            setView(localStorage.getItem('view') === 'true');
        }
    }, [userId]);


    const toggleView = () => {
        const newView = !view;
        setView(newView);
        localStorage.setItem('view', newView);
    };


    return (
        <div>     
            <HeaderDashboard options={options}/>
        <div className="flex">
            <Sidebar tudu={tudu} setTudu={setTudu}  view={view} toggleView={toggleView} />
            {view ? 
                (<MiddleSection tudu={tudu} setTudu={setTudu}  />) 
                : 
                (<MainFrame tudu={tudu} setTudu={setTudu} />)
            }
        </div>
        </div>
    );
};

export default Dashboard;
