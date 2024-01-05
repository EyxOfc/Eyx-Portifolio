import React from 'react';
import CardProjectHome from '../../Comps/CardProjectHome';

function ProjectsHome() {
    return ( 
        <>
        <section id='ProjectsHome' className='flex flex-row flex-wrap items-center justify-center gap-[10px] w-full p-[20px] '>

            <CardProjectHome Title='Em Breve um Titulo' Description='Em Breve ...' TextButton='Site'/>
            
            <CardProjectHome Title='Em Breve um Titulo' Description='Em Breve ...' TextButton='Site'/>

        </section>
        </>
    );
}

export default ProjectsHome;