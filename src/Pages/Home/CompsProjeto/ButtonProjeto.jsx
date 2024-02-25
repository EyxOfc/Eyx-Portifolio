import React from 'react';

function ButtonProjeto({To}) {
    return ( 
        <>
        <a target='_blank' href={To} className='transition .3s px-[24px] py-[6px] bg-white text-slate text-[.75rem] font-Sora font-[600] rounded-[4px] border-l-[4px] border-l-sky shadow-sm hover:shadow-lg'>View</a>
        </>
    );
}

export default ButtonProjeto;