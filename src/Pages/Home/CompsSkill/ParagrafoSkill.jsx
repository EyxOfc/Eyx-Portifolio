import React from 'react';

function ParagrafoSkill({Text, Direction}) {
    return ( 
        <>
        <p className={`w-full my-[10px] font-Sora font-[600] text-[.75rem] sm:text-[1.5rem] text-${Direction} text-slate dark:text-white`}>{Text}</p>
        </>
    );
}

export default ParagrafoSkill;