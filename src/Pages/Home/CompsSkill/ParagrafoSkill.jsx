import React from 'react';

function ParagrafoSkill({Text, Direction}) {
    return ( 
        <>
        <p className={`w-full my-[10px] font-Sora font-[600] text-[.75rem] text-${Direction} text-slate`}>{Text}</p>
        </>
    );
}

export default ParagrafoSkill;