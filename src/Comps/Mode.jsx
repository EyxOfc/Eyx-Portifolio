import React from 'react';

import { IoMdSunny } from "react-icons/io";

import { WiMoonAltWaningGibbous3 } from "react-icons/wi";

function Mode() {
    return ( 
        <>
            <button type="submit" className='flex flex-row flex-nowrap items-center justify-center transition .3s h-[32px] w-[32px] min-w-[32px] bg-pl dark:bg-sd rounded-[5px] shadow-sm hover:shadow-lg'>

                <IoMdSunny className='text-tl dark:hidden'/>

                <WiMoonAltWaningGibbous3 className='text-tl hidden dark:block'/>

            </button>
        </>
    );
}

export default Mode;