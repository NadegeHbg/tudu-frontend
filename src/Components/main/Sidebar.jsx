import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { filteringTuduActive, filteringTuduCategory } from "../../events/axiosGlobal";
import {
  ArchiveBoxIcon,
  ArrowDownCircleIcon,
  ArrowLeftOnRectangleIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  StarIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ tudu }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const newArray = tudu.map((obj) => {
    return { id: obj.id, category: obj.category };
  });

  const uniqueArray = [...new Set(newArray.map((item) => item.category))];

  function handleClick(item) {
    console.log("Clicked item key:", item);
    filteringTuduCategory(item)
  }

  return (
    <div className="">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 pt-24 overflow-y-auto bg-gray-800 border-gray-700">
          <ul className="space-y-2">
            {/*All Area*/}
            <li>
              <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <ArchiveBoxIcon className="w-6 h-6 text-cyan-300" />

                <span
                  className="flex-1 ml-3 whitespace-nowrap"
                >
                  All
                </span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </span>
            </li>

            {/*Active Area*/}
            <li>
              <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <StarIcon className="w-6 h-6 text-cyan-300" />
                <span
                  className="flex-1 ml-3 whitespace-nowrap"
                  onClick={() => filteringTuduActive(false)}
                >
                  Active
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </span>
            </li>

            {/*Upcoming Area*/}
            <li>
              <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <CalendarDaysIcon className="w-6 h-6 text-cyan-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Upcoming</span>
              </span>
            </li>

            {/*Done Area*/}
            <li>
              <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <CheckCircleIcon className="w-6 h-6 text-cyan-300" />

                <span className="flex-1 ml-3 whitespace-nowrap" onClick={() => filteringTuduActive(true)}>Done</span>
              </span>
            </li>

            {/*Category & Tags Area*/}
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
                      {uniqueArray.map((item) => (
                        <li
                          key={item}
                          className="flex items-center  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => handleClick(item)}
                        >
                          <ChevronRightIcon className="w-6 h-6 text-yellow-300" />
                          <button className="flex- mr-14 whitespace-nowrap p-2 text-base font-normal">
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) || <p>You do not have any todo</p>
                : null}
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {/*Sign Out Button*/}
            <li>
              {" "}
              <button
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
                type="button"
                onClick={() => {
                  navigate("/");
                }}
              >
                <ArrowLeftOnRectangleIcon className="w-6 h-6 text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap ">
                  {" "}
                  Sign Out
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {/* <div className="p-4 sm:ml-64"></div> */}
    </div>
  );
}
