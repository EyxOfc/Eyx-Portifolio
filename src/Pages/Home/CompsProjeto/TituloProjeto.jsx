import React from 'react';

function TituloProjeto({Title}) {
    return ( 
        <>
        <h1 className='flex flex-col flex-nowrap items-start justify-center w-full h-full font-Sora font-[900] text-[1rem] sm:text-[2rem] text-slate dark:text-white'>{Title}</h1>
        </>
    );
}

export default TituloProjeto;