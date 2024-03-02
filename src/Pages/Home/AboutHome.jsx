 import React from 'react';

import TituloAbout from './CompsAbout/TituloHome';
import ParagrafoAbout from './CompsAbout/ParagrafoAbout';
import ButtonAbout from './CompsAbout/ButtonAbout';


function AboutHome() {
    return ( 
        <>
        <section id='AboutHome' className='flex flex-col flex-nowrap items-center justify-center sm:gap-[30px] gap-[20px] w-full h-auto p-[20px]'>

            <TituloAbout Text={<>Desenvolvimento Web UI & UX com a melhor <span className='text-sky'>performance</span>.</>}/>

            <ParagrafoAbout StartDelay={1000} Text={['Estudante de programação, Nascido em São Paulo, Estou em busca de entrar na área e me desenvolver, De um bost em seu negócio, De um bost no seu perfil.', 'Conhecimentos em Javascript, Node Js, React Js, Figma & Tailwind Css']} />
            
            <ButtonAbout />

        </section>
        </>
    );
}

export default AboutHome;