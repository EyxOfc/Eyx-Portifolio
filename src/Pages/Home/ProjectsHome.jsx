import React from 'react';
import Projeto from './CompsProjeto/Projeto';

function ProjectsHome() {
    return ( 
        <>
        <section id='ProjectsHome' className='flex flex-row flex-wrap items-center justify-center sm:gap-[40px] gap-[20px] w-full p-[20px] '>

            <Projeto />

            <Projeto />

            <Projeto />

        </section>
        </>
    );
}

export default ProjectsHome;