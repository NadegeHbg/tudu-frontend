import React, { useState,useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { filteringTuduCategory, GetTodos ,filteringTuduActive} from "../../events/axiosGlobal";
import {
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  StarIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
// import { set } from "react-hook-form";

 const Sidebar = ({tudu, setTudu}) => {
  const [open, setOpen] = useState(false);
  const [uniqueArray, setUniqueArray] = useState([]);
  const [finalCategory, setFinalCategory] = useState([])
  const handleOpen = () => {
    setOpen(!open);
  };
  //display tudu
  const navigate = useNavigate();
  useEffect(() => {
    categoryFunction();
  }, [tudu]);

   //get all-tudu
   async function fetchData() {
    const data = Cookies.get("id");
    setTudu(await GetTodos(data));
  }

  //filtering the tudu
  function categoryFunction() {
    if (tudu.length > 0) {
      const newArray = tudu.map((obj) => {
        return { id: obj.id, category: obj.category };
      });

      const uniqueArray = [...new Set(newArray.map((item) => item.category))];
      setUniqueArray(uniqueArray);
      if(finalCategory.length<uniqueArray.length)
        setFinalCategory(uniqueArray)

    } 
  }

  // category filter
  const handleClick = async (item) => {
    console.log("Clicked item key:", item);
    const filterValue = await filteringTuduCategory(item);
    console.log(filterValue,"sidebar filter category")
    setTudu(filterValue)
  }

  // Upcoming filter   
  if(tudu.length > 0) {
    tudu.map((todo) => {
      todo.duedate = new Date()
    })
  }

  // Active & done filter    
  const filteringTuduActif = async (data) => {
    console.log("Clicked item key:", data);
    const filterValue = await filteringTuduActive(data);
    console.log(filterValue,"sidebar filter category")
    setTudu(filterValue)
  };

 

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
            <li
              onClick={() => {
                fetchData();
                console.log(tudu,"onclick sidebar");
              }}
            >
              <span className="flex items-center p-2 text-base font-normal text-neutral-300 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <ArchiveBoxIcon className="w-6 h-6 text-cyan-300" />

                <span className="flex-1 ml-3 whitespace-nowrap">All</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </span>
            </li>

            {/*Active Area*/}
            <li onClick={() => filteringTuduActif(false)}>
              <span className="flex items-center p-2 text-base font-normal text-neutral-300 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900">
                <StarIcon className="w-6 h-6 text-cyan-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Active</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </span>
            </li>

            {/*Upcoming Area*/}
            <li>
              <span className="flex items-center p-2 text-base font-normal text-neutral-300 hover:text-gray-900  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <CalendarDaysIcon className="w-6 h-6 text-cyan-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Upcoming</span>
              </span>
            </li>

            {/*Done Area*/}
            <li onClick={() => filteringTuduActif(true)}>
              <span className="flex items-center p-2 text-base font-normal text-neutral-300 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <CheckCircleIcon className="w-6 h-6 text-cyan-300" />

                <span className="flex-1 ml-3 whitespace-nowrap">Done</span>
              </span>
            </li>

            {/*Category & Tags Area*/}
            <li>
              <button
                className="flex items-center p-2 text-base font-normal  text-neutral-300 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={handleOpen}
              >
                <TagIcon className="w-6 h-6 text-cyan-300" />

                <span className="flex-1 ml-3 whitespace-nowrap">Category</span>
              </button>
              {open
                ? (
                    <ul>
                      {(finalCategory.length>0) ?(finalCategory.map((item) => 
                        (
                          <li
                            key={item}
                            className="flex items-center  text-neutral-500 hover:text-gray-900  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => handleClick(item)}
                          >
                            <ChevronRightIcon className="w-6 h-6 text-yellow-300" />
                            <button className="flex- mr-14 whitespace-nowrap p-2 text-base font-normal">
                              {item}
                            </button>
                          </li>
                              
                        ))):( 
                          <button className="flex- mr-14 whitespace-nowrap p-2 text-base font-normal">
                          No Category
                          </button> )
                      }
                    </ul>
                  ) :(<p></p>)
              }
                 
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
                <span className="flex-1 ml-3 whitespace-nowrap text-neutral-500 hover:text-gray-900  ">
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
export default Sidebar