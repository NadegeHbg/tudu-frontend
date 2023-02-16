import React, { useState } from "react";
import TodoItemForm from "../forms/TodoItemForm";
import { ArchiveBoxIcon, Bars3BottomLeftIcon, CalendarDaysIcon, CheckCircleIcon, ChevronRightIcon, MagnifyingGlassIcon, StarIcon, TagIcon } from '@heroicons/react/24/outline'


const searchHandler = (event) => {
    event.preventDefault();
    console.log("i am working");
};

export default function Sidebar({ tudu }) {
    const [open, setOpen] = useState(false);
    const [allLiClicked, setAllLiClicked] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    
    return (
        <div className="">
            <nav class="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
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

            <aside
                id="default-sidebar"
                class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 pt-24 overflow-y-auto bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <form action="">
                                <label
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    htmlFor=" Search "
                                >
                                    <MagnifyingGlassIcon className="w-6 h-6 text-cyan-300" />

                                    <input className="flex items-center text-coolBlack font-normal" type="text" name="search" placeholder=" Search " />
                                </label>
                                <button type="submit" onClick={searchHandler}></button>
                            </form>
                        </li>

                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <ArchiveBoxIcon className="w-6 h-6 text-cyan-300" />

                                <span className="flex-1 ml-3 whitespace-nowrap">All</span>
                                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                            </span>
                        </li>

                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <StarIcon className="w-6 h-6 text-cyan-300" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Active</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span>
                            </span>
                        </li>

                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                < CalendarDaysIcon className="w-6 h-6 text-cyan-300" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Upcoming</span>
                            </span>
                        </li>

                        <li>
                            <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <CheckCircleIcon className="w-6 h-6 text-cyan-300" />

                                <span className="flex-1 ml-3 whitespace-nowrap">Done</span>
                            </span>
                        </li>
                        <li>
                            <button
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                onClick={handleOpen}
                            >
                                <TagIcon className="w-6 h-6 text-cyan-300" />

                                <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
                            </button>
                            {open
                                ? (
                                      <ul>
                                          <li className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                              < ChevronRightIcon className="w-6 h-6" />
                                              <button class="flex- mr-14 whitespace-nowrap p-2 text-base font-normal">Project</button>
                                          </li>
                                      </ul>
                                  ) || <p>You do not have any todo</p>
                                : null}
                        </li>
                    </ul>
                </div>
            </aside>
            {/* <div class="p-4 sm:ml-64"></div> */}
        </div>
    );
}
