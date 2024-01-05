import React from 'react';
import ButtonRedesHome from '../../Comps/ButtonRedesHome';

import ThreadsIcon from './../../icons/Threads.png'
import IntagramIcon from './../../icons/Instagram.png'
import GitHubIcon from './../../icons/Git Hub.png'
import LinkedInIcon from './../../icons/LinkedIn.png'
import EmailIcon from './../../icons/Email.png'
import WhatsAppIcon from './../../icons/WhatsApp.png'

function RedesHome() {
    return ( 
        <>
        <section id='RedeHome' className='flex flex-row flex-wrap items-center justify-center gap-[10px] w-full h-auto p-[20px]'>

            <ButtonRedesHome SrcIcon={ThreadsIcon} Text='Threads' To='https://www.threads.net/@a.arj.ofc' />
            <ButtonRedesHome SrcIcon={IntagramIcon} Text='Instagram' To='https://www.instagram.com/a.arj.ofc' />
            <ButtonRedesHome SrcIcon={GitHubIcon} Text='Git Hub' To='https://github.com/EyxOfc' />
            <ButtonRedesHome SrcIcon={LinkedInIcon} Text='LinkedIn' To='https://www.linkedin.com/in/andrey-araujo-8724992a7/' />
            <ButtonRedesHome SrcIcon={EmailIcon} Text='Email' To='mailto:andrey.araujo.ofc@gmail.com' />
            <ButtonRedesHome SrcIcon={WhatsAppIcon} Text='WhatsApp' To='https://wa.me/5511954879771' />

        </section>
        </>
    );
}

export default RedesHome;