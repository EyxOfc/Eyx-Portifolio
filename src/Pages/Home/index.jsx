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
        <div className='overflow-hidden w-full h-auto pt-[60px] sm:pt-[100px] bg-gradient-to-tl from-gray dark:from-slate to-white dark:to-slate  '>
            
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