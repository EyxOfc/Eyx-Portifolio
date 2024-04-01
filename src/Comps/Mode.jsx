import React from 'react';

import { IoMdSunny } from "react-icons/io";

import { WiMoonAltWaningGibbous3 } from "react-icons/wi";

function Mode() {
    return ( 
        <>
            <button type="submit" className='flex flex-row flex-nowrap items-center justify-center transition .3s h-[32px] sm:h-[55px] min-w-[32px] sm:min-w-[55px] bg-white dark:bg-slate rounded-[5px] shadow-sm hover:shadow-lg'>

                <IoMdSunny className='sm:scale-[1.75] text-sky dark:hidden'/>

                <WiMoonAltWaningGibbous3 className='sm:scale-[1.75] text-sky hidden dark:block'/>

            </button>
        </>
    );
}

export default Mode;