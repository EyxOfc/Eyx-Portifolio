import React from 'react';

function ParagrafoAbout({Text}) {
    return ( 
        <>
        <p className='w-[90%] sm:w-[80%] font-Sora font-[600] text-center text-slate text-[.75rem] sm:text-[1.5rem]'>{Text}</p>
        </>
    );
}

export default ParagrafoAbout;