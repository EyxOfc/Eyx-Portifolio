import React from 'react';
import { Link } from 'react-router-dom';

function ButtonRedesHome({SrcIcon, Text, To}) {
    return ( 
        <>
        <button type="submit" className='flex flex-row flex-nowrap items-center justify-center sm:gap-[10px] gap-[5px] transition .3s min-w-[135px] w-[135px] sm:w-[150px] sm:h-[45px] h-[35px] dark:bg-white/10 bg-pl shadow-lg hover:shadow-xl border-l-[3px] dark:border-pl border-sd hover:border-td rounded-[3px]'>

            <img src={SrcIcon} alt={Text} className='w-[18px] sm:w-[24px]'/>

            <span className='font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'><Link to={To} target='_blank'>{Text}</Link></span>

        </button>
        </>
    );
}

export default ButtonRedesHome;