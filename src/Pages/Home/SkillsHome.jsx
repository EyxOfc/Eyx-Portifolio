import React from 'react';
import CardSkillHome from '../../Comps/CardSkillHome';

function SkillsHome() {
    return ( 
        <>
        <section id='SkillsHome' className='flex flex-col flex-nowrap items-center justify-center gap-[10px] w-full h-auto p-[20px]'>

            <p className='w-full h-auto font-Sora font-[600] text-[.75rem] text-center dark:text-pl text-sd'>Conhecimentos em <span className='text-td'>Javascript</span>, <span className='text-td'>Node Js</span>, <span className='text-td'>React Js</span>, <span className='text-td'>Figma</span> & <span className='text-td'>Tailwind Css</span></p>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[10px] w-full h-auto'>

                <CardSkillHome Text='Oferecemos desenvolvimento web para sites institucionais, blogs, Transforme suas ideias em realidade digital sem complicações.' Title='Desenvolvimento Web'/>

                <CardSkillHome Text='Oferecemos desenvolvimento web para sites institucionais, blogs, Transforme suas ideias em realidade digital sem complicações.' Title='Desenvolvimento Web'/>

                <CardSkillHome Text='Oferecemos desenvolvimento web para sites institucionais, blogs, Transforme suas ideias em realidade digital sem complicações.' Title='Desenvolvimento Web'/>

            </div>

        </section>
        </>
    );
}

export default SkillsHome;