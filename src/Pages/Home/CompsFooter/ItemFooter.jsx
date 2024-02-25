import React from 'react';
import { Link } from 'react-router-dom';

function ItemFooter({To, Text}) {
    return ( 
        <>
        <Link to={To} className='flex flex-row flex-nowrap items-center justify-start h-[30px] sm:h-[45px] w-full font-Sora font-[600] text-[.75rem] sm:text-[1.5rem] text-slate'>{Text}</Link>
        </>
    );
}

export default ItemFooter;