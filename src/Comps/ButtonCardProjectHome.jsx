import React from 'react';

import { MdInsertEmoticon } from "react-icons/md";


function ButtonCardProjectHome({TextButton}) {
    return ( 
        <>
        <button type="submit" className='transition .3s flex flex-row flex-nowrap items-center justify-center gap-[5px] h-[30px] px-[12px] dark:bg-white/10 bg-pl shadow-lg hover:shadow-xl rounded-[2px] border-l-[2px] dark:border-pl border-sd hover:border-td'>

            <MdInsertEmoticon className='text-td' size={15}/>

            <span className='text-[.75rem] dark:text-pl text-sd font-Sora font-[900]'>{TextButton}</span>

        </button>
        </>
    );
}

export default ButtonCardProjectHome;