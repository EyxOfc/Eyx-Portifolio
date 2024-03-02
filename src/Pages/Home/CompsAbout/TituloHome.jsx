import React from 'react';

function TituloAbout({Text}) {
    return ( 
        <>
        <h1 className='w-[90%] font-Sora text-slate dark:text-white text-[1.5rem] sm:text-[3rem] font-[900] text-center'>{Text}</h1>
        </>
    );
}

export default TituloAbout;