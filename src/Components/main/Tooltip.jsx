import React from "react";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { createPopper } from "@popperjs/core";

const Tooltip = ({ color }) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef = React.createRef();
  const tooltipRef = React.createRef();
  const openLeftTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: "right"
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
            <button className="relative">
            <BellAlertIcon className="  w-6 h-6 text-cyan-300" />
            <div
                className="absolute top-0 right-0  z-10 inline-block translate-x-2/4 translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-pink-700 p-2 text-xs "               
                type="button"
                onMouseEnter={openLeftTooltip}
                onMouseLeave={closeLeftTooltip}
                ref={btnRef}>                                          
            </div>
            </button>
           
          <div
            className={
              (tooltipShow ? "" : "hidden ") +
              
              "text-cyan-300 z-10 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={tooltipRef}
          >
            <div>
              <div
                className={
                 
                  "text-cyan-300 z-10  text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-slate-100 uppercase rounded-t-lg"
                }
              >
                tooltip title
              </div>
              <div className="text-white p-3 z-10 ">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TooltipRender() {
  return (
    <>
    <Tooltip />
    </>
  );
}