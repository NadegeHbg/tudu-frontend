import { CheckIcon, EllipsisVerticalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function MiddleSection() {
    return (
        <section className="text-gray-600 body-font w-full">
            <div className="container px-5 py-4 mx-auto">
                <div className="flex flex-wrap">

                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>

                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">To Do </h1>

                            <p className="leading-relaxed mb-3"> Date 14/02/2023</p>

                            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                <button className="w-full sm:w-auto bg-gray-800 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                < CheckIcon className="w-6 h-6 text-neutral-100" />
                                </button>
                                <button className="w-full sm:w-auto bg-gray-800 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                <XMarkIcon className="h-6 w-6 " />
                                </button>
                                <button className="w-full sm:w-auto bg-gray-800 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-2 py-2.5 ">
                                < EllipsisVerticalIcon className="h-6 w-6 " />
                                </button>
                            </div>

                        </div>
                </div>
            </div>
        </section>
    );
}
