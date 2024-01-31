import React from 'react'
import {
    SiAboutdotme,
    SiGmail,
    SiGoogleanalytics,
    SiWindows11,
    SiWpexplorer,
} from "react-icons/si";

const MobileBottom = () => {
    return (
        <div className='absolute sm:hidden flex flex-row space-x-4 justify-between items-center bottom-0 w-full px-8 py-4 bg-white rounded'>
            <SiAboutdotme size={24} className='text-gray-500' />
            <SiGmail size={24} className='text-gray-500' />
            <SiGoogleanalytics size={24} className='text-violet-500' />
            <SiWindows11 size={24} className='text-gray-500' />
            <SiWpexplorer size={24} className='text-gray-500' />

        </div>
    )
}

export default MobileBottom