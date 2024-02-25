import React from 'react';

function ButtonProjeto({To}) {
    return ( 
        <>
        <a target='_blank' href={To} className='transition .3s px-[24px] sm:px-[48px] py-[6px] sm:py-[12px] bg-white text-slate text-[.75rem] sm:text-[1.5rem] font-Sora font-[600] rounded-[4px] border-l-[4px] border-l-sky shadow-lg hover:shadow-2xl'>View</a>
        </>
    );
}

export default ButtonProjeto;