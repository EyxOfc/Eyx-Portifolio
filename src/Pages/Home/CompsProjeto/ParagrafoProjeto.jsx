import React from 'react';

function ParagrafoProjeto({Text}) {
    return ( 
        <>
        <p className='w-full min-h-[60px] sm:min-h-[80px] font-Sora font-[500] text-justify text-[.75rem] sm:text-[1.25rem] text-slate'>{Text}</p>
        </>
    );
}

export default ParagrafoProjeto;