import React from 'react';

import Header from '../../Comps/Header';
import AboutHome from './AboutHome';
import SkillsHome from './SkillsHome';
import ProjectsHome from './ProjectsHome';
import RedesHome from './RedesHome';
import FooterHome from './FooterHome';

function Home() {
    return ( 
        <>
        <div className='overflow-hidden w-full h-auto pt-[60px] bg-gradient-to-tl dark:from-sd from-pl dark:to-sd to-sl  '>
            
            <Header />

            <AboutHome />
            <SkillsHome />
            <ProjectsHome />
            <RedesHome />
            <FooterHome />
            
        </div>
        </>
    );
}

export default Home;