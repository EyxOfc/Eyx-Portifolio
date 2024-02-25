import React from 'react';

function TituloSkill({Text, Direction}) {
    return ( 
        <>
        <h1 className={`w-full h-auto font-Sora font-[900] text-slate text-${Direction} text-[1.5rem] sm:text-[3rem] my-[10px]`}>{Text}</h1>
        </>
    );
}

export default TituloSkill;