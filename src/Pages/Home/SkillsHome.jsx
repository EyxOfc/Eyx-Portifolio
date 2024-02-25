import React from 'react';

import TituloSkill from './CompsSkill/TituloSkill';
import ParagrafoSkill from './CompsSkill/ParagrafoSkill';
import LineSkill from './CompsSkill/LineSkill';

function SkillsHome() {
    return ( 
        <>
        <section id='SkillsHome' className='w-full h-auto p-[20px] sm:p-[40px]'>

            <TituloSkill Text='Desenvolvimento Web' Direction='left'/>

            <ParagrafoSkill Text='Seu site com a melhor permormançe, layout e paletas com o tema do projeto, Totalmente flexivel.' Direction='left'/>

            <LineSkill Direction='r'/>

            <TituloSkill Text='Social Media' Direction='right'/>

            <ParagrafoSkill Text='Suas plataformas digitais com o design perfeito, Post interativos e Perfil organizado.' Direction='right'/>

            <LineSkill Direction='l'/>

            <TituloSkill Text='UI & UX' Direction='left'/>

            <ParagrafoSkill Text='Prototipos totalmentes adaptativos e com responsividade, UI & UX pensado no cliente.' Direction='left'/>

        </section>
        </>
    );
}

export default SkillsHome;