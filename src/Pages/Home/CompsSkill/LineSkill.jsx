import React from 'react';

function LineSkill({Direction}) {
    return ( 
        <>
        <div className={`w-[80%] h-[4px] sm:h-[6px] bg-sky m${Direction}-[auto] my-[30px] rounded-lg`}>

        </div>
        </>
    );
}

export default LineSkill;