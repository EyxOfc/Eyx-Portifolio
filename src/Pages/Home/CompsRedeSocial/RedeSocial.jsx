import React from 'react';

function RedeSocial({SrcIcon, Text, To}) {
    return ( 
        <>
        <a href={To} rel='noopener' target='_blank' className='flex flex-row flex-nowrap items-center justify-center gap-[5px] h-[35px] w-[130px] bg-white border-l-[3px] border-slate rounded-[3px]' >

            <img src={SrcIcon} alt={Text} className='w-[20px]'/>

            <span className='font-Sora font-[900] text-[.75rem] text-slate'>{Text}</span>

        </a>
        </>
    );
}

export default RedeSocial;