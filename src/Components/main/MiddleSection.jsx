import { CheckIcon, EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function MiddleSection({ tudu, allTodo }) {
    return (
        <section className="text-gray-600 body-font w-full">
            <div className="container px-5 py-4 mx-auto">
                <div className="flex flex-wrap gap-8">
                    {allTodo ? (tudu.map((todo) =>
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative ">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            {/*To Do Area*/}
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">To Do </h1>

                            {/*Description Area*/}
                            <div className="overflow-auto h-10 w-48 bg-gray-200 m-2">
                                Description Area : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book.
                            </div>

                            {/*Date-Calendar Area*/}
                            <p className="leading-relaxed mb-3"> 14/02/2023</p>

                            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                {/*Done Button Blue*/}
                                <button className="w-full sm:w-auto bg-gray-800 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                    <CheckIcon className="w-6 h-6 text-neutral-100" />
                                </button>

                                {/*Delete Button Red*/}
                                <button className="w-full sm:w-auto bg-gray-800 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                    <XMarkIcon className="h-6 w-6 " />
                                </button>

                                {/*Edit Button Gray*/}
                                <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                    <EllipsisVerticalIcon className="h-6 w-6 " />
                                </button>
                            </div>
                        </div>)) : <h1>You do not have any todos</h1>}

                </div>
            </div>
        </section>
    );
}
