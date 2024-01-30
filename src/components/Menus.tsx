import React from "react";
import {
  SiAboutdotme,
  SiGmail,
  SiGoogleanalytics,
  SiWindows11,
  SiWpexplorer,
} from "react-icons/si";

const Menus = () => {
  return (
    <div className="w-full px-2 items-center pt-2">
      <div className=" flex flex-col justify-start items-start pb-4 border-b border-solid border-violet-400 w-[80%]">
        <div className="flex flex-row space-x-2 items-center hover:bg-violet-200 mx-2 p-2  rounded cursor-pointer w-[100%]">
          <SiWindows11 size={16} className="text-violet-400" />
          <p className="text-violet-600 text-sm font-semibold">Home</p>
        </div>
        <div className="flex flex-row space-x-2 items-center hover:bg-violet-200 mx-2 p-2 rounded cursor-pointer w-[100%]">
          <SiGmail size={18} className="text-violet-400" />
          <p className="text-violet-600 text-sm font-semibold">Job Invites</p>
        </div>
        <div className="flex flex-row space-x-2 items-center hover:bg-violet-200 mx-2 p-2 rounded cursor-pointer w-[100%]">
          <SiGoogleanalytics size={16} className="text-violet-400" />
          <p className="text-violet-600 text-sm font-semibold">Analytics</p>
        </div>
        <div className="flex flex-row space-x-2 items-center hover:bg-violet-200 mx-2 p-2  rounded cursor-pointer w-[100%]">
          <SiAboutdotme size={16} className="text-violet-400" />
          <p className="text-violet-600 text-sm font-semibold">My Profile</p>
        </div>
        <div className="flex flex-row space-x-2 items-center hover:bg-violet-200 mx-2 p-2  rounded cursor-pointer w-[100%]">
          <SiWpexplorer size={16} className="text-violet-400" />
          <p className="text-violet-600 text-sm font-semibold">Explore</p>
        </div>
      </div>
    </div>
  );
};

export default Menus;
