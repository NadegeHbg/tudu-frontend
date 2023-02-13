import { useEffect } from "react";
import TodoItemForm from "../Components/forms/TodoItemForm";
import { GetTodos } from "../events/axiosGlobal";
import Cookies from "js-cookie";

const Dashboard = () => {
  useEffect(() => {
    const data = Cookies.get("id");
    GetTodos(data);
  }, []);

  return <TodoItemForm />;
};

export default Dashboard;
