import TodoItemForm from "../forms/TodoItemForm";
import { Bars3BottomLeftIcon} from '@heroicons/react/24/outline'
import { useLocation } from "react-router-dom";

const HeaderDashboardStyle = () => {
    return (
        <nav class="z-50 w-full border-b bg-gray-800 border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div className="flex justify-center ">
                    <img className="w-14 " src={require("../assets/tudu.png")} alt="Logo" />

                    <button
                        data-drawer-target="default-sidebar"
                        data-drawer-toggle="default-sidebar"
                        aria-controls="default-sidebar"
                        type="button"
                        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span class="sr-only">Open sidebar</span>
                        <Bars3BottomLeftIcon className="w-6 h-6 text-neutral-100" />
                    </button>
                </div>
                <div class="flex items-center ml-3">
                    <TodoItemForm />
                </div>
            </div>
        </div>
    </nav>
    )
}


const HeaderDashboard = () => {
    const location = useLocation();

    if (location.pathname !== '/' && location.pathname !== '/login') {
        return <HeaderDashboardStyle />
    }
}

export default HeaderDashboard;