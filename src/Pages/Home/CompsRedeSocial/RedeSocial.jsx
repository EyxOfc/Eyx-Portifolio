import React from 'react';
import IconRedeSocial from './IconRedeSocial';
import NomeRedeSocial from './NomeRedeSocial';

function RedeSocial({SrcIcon, Text, To}) {
    return ( 
        <>
        <a href={To} rel='noopener' target='_blank' className='transition .3s flex flex-row flex-nowrap items-center justify-center gap-[5px] sm:gap-[10px] h-[35px] sm:h-[70px] w-[130px] sm:w-[260px] bg-white dark:bg-slate border-l-[3px] sm:border-l-[6px] border-slate dark:border-white rounded-[3px] sm:rounded-[6px] shadow-lg hover:shadow-xl' >

            <IconRedeSocial SrcIcon={SrcIcon} Text={Text}/>

            <NomeRedeSocial Text={Text}/>

        </a>
        </>
    );
}

export default RedeSocial;