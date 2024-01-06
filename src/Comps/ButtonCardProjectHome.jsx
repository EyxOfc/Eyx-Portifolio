import React from 'react';

import { MdInsertEmoticon } from "react-icons/md";


function ButtonCardProjectHome({TextButton}) {
    return ( 
        <>
        <button type="submit" className='transition .3s flex flex-row flex-nowrap items-center justify-center sm:gap-[10px] gap-[5px] sm:h-[35px] h-[30px] sm:px-[18px] px-[12px] dark:bg-white/10 bg-pl shadow-lg hover:shadow-xl rounded-[2px] border-l-[2px] dark:border-pl border-sd hover:border-td'>

            <MdInsertEmoticon className='text-td' size={15}/>

            <span className='sm:text-[1rem] text-[.75rem] dark:text-pl text-sd font-Sora font-[900]'>{TextButton}</span>

        </button>
        </>
    );
}

export default ButtonCardProjectHome;