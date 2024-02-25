import React from 'react';

function IconRedeSocial({SrcIcon, Text}) {
    return ( 
        <>
        <img src={SrcIcon} alt={Text} className='w-[20px] sm:w-[40px]'/>
        </>
    );
}

export default IconRedeSocial;