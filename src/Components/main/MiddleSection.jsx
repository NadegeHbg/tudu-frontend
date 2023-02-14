import React from 'react';
import { InboxStackIcon } from "@heroicons/react/24/solid";

export default function MiddleSection() {
  return (
    <div className="bg-white h-screen">
      <div className="flex  border-2 border-secondary w-1/3  ml-4">
        <div className="flex justify-center bg-secondary p-2">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center border-r-2 border-secondary p-2">
          <button className="m-O">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#14375A" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>

          </button>
        </div>
        <div className="flex justify-center  ">
          <div className="flex justify-center ">
          <div className="flex items-center  bg-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <button>Add new Todo</button>          
          </div>     
        </div>
      </div>
      <div className="h-screen">
        <h2 className="text-secondary ml-4 text-xl">Current</h2>
        <div className="flex h-screen">
          <div className="flex flex-col border-2 border-secondary rounded-tl-xl_large rounded-br-xl_large w-1/3 h-1/6 px-4 m-4 justify-center">
            <h3 className="text-secondary">Laundry</h3>
            <p className="text-secondary">Date 13/02/2023</p>
          </div>
          <div className="flex items-center border-2 border-secondary rounded-tl-xl_large rounded-br-xl_large w-1/3 h-1/6 px-4 m-4 justify-center">
            <div className="flex ">
              <h3>Laundry</h3>
            </div>
            <div className="flex">
              <p>Date 13/02/2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
