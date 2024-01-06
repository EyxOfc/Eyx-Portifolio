import React from 'react';
import { Link } from 'react-router-dom';

function ButtonHeader({Text, To}) {
    return ( 
        <>
            <a href={To} type="submit" className='transition .3s flex flex-row felx-nowrap items-center justify-center prsn:px-[15px] px-[10px] h-[25px] sm:h-[32px] dark:bg-sd bg-pl border-l-[2px] dark:border-pl border-sd hover:border-tl font-Sora font-[700] dark:text-pl text-sd sm:text-[.7rem] text-[.5rem] rounded-[2px] shadow-md hover:shadow-lg'>{Text}</a>
        </>
    );
}

export default ButtonHeader;