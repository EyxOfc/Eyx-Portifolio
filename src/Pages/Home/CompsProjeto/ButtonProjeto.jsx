import React from 'react';

function ButtonProjeto({To}) {
    return ( 
        <>
        <a target='_blank' rel="noreferrer"  href={To} className='transition .3s px-[24px] sm:px-[48px] py-[6px] sm:py-[12px] bg-white dark:bg-sky text-slate dark:text-white text-[.75rem] sm:text-[1.5rem] font-Sora font-[600] rounded-[4px] border-l-[4px] border-l-sky dark:border-l-white shadow-lg hover:shadow-2xl'>View</a>
        </>
    );
}

export default ButtonProjeto;