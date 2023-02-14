import { useEffect } from "react";
import TodoItemForm from "../Components/forms/TodoItemForm";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";
import Sidebar from "../Components/main/Sidebar";

const Dashboard = () => {
  useEffect(() => {
    async function fetchData() {
      const data = Cookies.get("id");
      await GetTodos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-between">
      <Sidebar />

      <TodoItemForm />
    </div>
  );
};

export default Dashboard;
