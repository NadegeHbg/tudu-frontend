import {
    CheckIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import TodoItemForm from "../forms/TodoItemForm";
import { isDoneTudu, deleteTudu } from "../../events/axiosGlobal";

export default function MiddleSection({ tudu }) {

    // const duedate = (duedate) => {
    //     const date = new Date();
    //     const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    //     return date.toLocaleDateString("en-GB", options).replace(/\//g, "/");
    // }

    const handleDone = (id) => {
        isDoneTudu(id);
    }
    const handleDelete = (id) => {
        deleteTudu(id);
    }

   

    return (
        <section className="p-4 sm:ml-64 marker:text-gray-600 body-font w-full">
            <div className="container px-5 py-4 mx-auto">
                <div className="flex flex-wrap gap-8">
                    {tudu ? (
                        tudu.map((todo) => (
                            <div
                                key={todo.id}
                                className="m-4 h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative"
                            >
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                    {todo.category}
                                </h2>
                                {/*To Do Area*/}
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                    {todo.ptaskname}
                                </h1>

                                {/*Description Area*/}
                                <div className="overflow-auto h-10 w-48 bg-gray-200 m-2">
                                    {todo.description}
                                </div>

                                {/*Date-Calendar Area*/}
                                <p className="leading-relaxed mb-3">
                                    {new Date(todo.duedate).toISOString().slice(0, 10)}
                                </p>

                                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                    {/*Done Button Blue*/}
                                    <div onClick={() => {handleDone(todo.id)}} className="w-full sm:w-auto bg-gray-800 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                        <CheckIcon className="w-6 h-6 text-neutral-100" />
                                    </div>

                                    {/*Delete button Red*/}
                                    <div onClick={() => { handleDelete(todo.id) }} className="w-full sm:w-auto bg-gray-800 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                        <XMarkIcon className="h-6 w-6 " />
                                    </div>

                                    {/*Edit Button Gray New*/}
                                    <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                        <TodoItemForm todo={todo} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                            You do not have any todos
                        </h1>
                    )}
                </div>
            </div>
        </section>
    );
}
