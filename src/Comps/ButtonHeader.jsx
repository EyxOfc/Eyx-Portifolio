import React from 'react';
import { Link } from 'react-router-dom';

function ButtonHeader({Text, To}) {
    return ( 
        <>
            <a href={To} type="submit" className='px-[12px] sm:px-[24px] py-[3px] sm:py-[6px] font-Sora font-[900] text-[.75rem] sm:text-[1.25rem] text-slate dark:text-white bg-white dark:bg-slate rounded-[2px] border-l-[3px] sm:border-l-[4px] border-slate dark:border-sky'>{Text}</a>
        </>
    );
}

export default ButtonHeader;