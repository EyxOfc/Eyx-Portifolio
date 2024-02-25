import React from 'react';

function ItemTitleFooter({Text}) {
    return ( 
        <>
        <h1 className='flex flex-row flex-nowrap items-center justify-start h-[30px] w-full font-Sora font-[900] text-[1.25rem] text-slate'>{Text}</h1>
        </>
    );
}

export default ItemTitleFooter;