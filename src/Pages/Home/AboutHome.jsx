import React from 'react';

import TituloAbout from './CompsAbout/TituloHome';
import ParagrafoAbout from './CompsAbout/ParagrafoAbout';
import ButtonAbout from './CompsAbout/ButtonAbout';

function AboutHome() {
    return ( 
        <>
        <section id='AboutHome' className='flex flex-col flex-nowrap items-center justify-center sm:gap-[15px] gap-[10px] w-full h-auto p-[20px]'>

            <TituloAbout Text={<>Desenvolvimento Web UI & UX com a melhor <span className='text-sky'>performance</span>.</>}/>

            <ParagrafoAbout Text={<>Estudante de programação, Nascido em São Paulo, Estou em busca de entrar na área e me <span className='text-sky'>desenvolver</span>, De um bost em seu negocio, De um bost no seu perfil.</>}/>

            <ParagrafoAbout Text={<>Conhecimentos em <span className='text-sky'>Javascript</span>, <span className='text-sky'>Node Js</span>, <span className='text-sky'>React Js</span>, <span className='text-sky'>Figma</span> & <span className='text-sky'>Tailwind Css</span></>}/>

            <ButtonAbout />

        </section>
        </>
    );
}

export default AboutHome;