import React from 'react';

import { ReactTyped } from "react-typed";

function ParagrafoAbout({Text, StartDelay}) {

    return ( 
        <>
        <ReactTyped strings={Text} loop={Infinity} backSpeed={25} typeSpeed={60} backDelay={5000} className='w-[90%] sm:w-[80%] font-Sora font-[600] text-center text-slate dark:text-white text-[.75rem] sm:text-[1.5rem]' startDelay={StartDelay} />
        </>
    );
}

export default ParagrafoAbout;