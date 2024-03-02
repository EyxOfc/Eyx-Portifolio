import React from 'react';

import { RiShareFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function ButtonAbout() {
    return ( 
        <>
        <Link to='https://wa.me/5511954879771' target='_blank' type="submit" className='transition .3s flex flex-row flex-nowrap items-center justify-center gap-[5px] w-[150px] sm:w-[300px] h-[40px] sm:h-[80px] bg-white dark:bg-slate rounded-[3px] sm:rounded-[6px] shadow-sm dark:shadow-lg hover:shadow-xl border-l-[3px] sm:border-l-[6px] border-slate dark:border-sky' >

            <RiShareFill className='text-[18px] sm:text-[36px] text-slate dark:text-white'/>

            <span className='font-Sora font-[900] text-[.75rem] sm:text-[1.5rem] text-slate dark:text-white'>Conectar</span>
            
        </Link>
        </>
    );
}

export default ButtonAbout;