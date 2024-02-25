import React from 'react';

import ListaFooter from './CompsFooter/ListaFooter';
import ItemFooter from './CompsFooter/ItemFooter';
import ItemTitleFooter from './CompsFooter/ItemTitleFooter';

function FooterHome() {
    return ( 
        <>
        <footer className='flex flex-row flex-wrap items-start justify-start gap-[15px] sm:gap-[40px] w-full h-auto p-[20px] sm:p-[40px]'>

            <ListaFooter Children={
                <>
                    <ItemTitleFooter Text='Redes'/>
                    <ItemFooter To='https://www.threads.net/@a.arj.ofc' Text='Threads'/>
                    <ItemFooter To='https://www.instagram.com/a.arj.ofc' Text='Instagram'></ItemFooter>
                    <ItemFooter To='https://github.com/EyxOfc' Text='Git Hub'></ItemFooter>
                    <ItemFooter To='https://www.linkedin.com/in/andrey-araujo-8724992a7/' Text='LinkedIn'></ItemFooter>
                    <ItemFooter To='mailto:andrey.araujo.ofc@gmail.com' Text='Email'></ItemFooter>
                    <ItemFooter To='https://wa.me/5511954879771' Text='WhatsApp'></ItemFooter>
                </>
            }/>

            <ListaFooter Children={
                <>
                    <ItemTitleFooter Text='Ultilizados'/>
                    <ItemFooter To='https://fonts.google.com' Text='Google Fontes'/>
                    <ItemFooter To='https://icons8.com.br' Text='Icons8'></ItemFooter>
                    <ItemFooter To='https://react-icons.github.io/react-icons' Text='React Icons'></ItemFooter>
                    <ItemFooter To='https://tailwindcss.com' Text='Tailwind Css'></ItemFooter>
                </>
            }/>

            <ListaFooter Children={
                <>
                    <ItemTitleFooter Text='Skills'/>
                    <ItemFooter Text='Javascript'/>
                    <ItemFooter Text='Node Js'></ItemFooter>
                    <ItemFooter Text='React Js'></ItemFooter>
                    <ItemFooter Text='Figma'></ItemFooter>
                    <ItemFooter Text='Tailwind Css'></ItemFooter>
                </>
            }/>

        </footer>
        </>
    );
}

export default FooterHome;