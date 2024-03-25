import React from 'react';
import Projeto from './CompsProjeto/Projeto';

function ProjectsHome() {
    return ( 
        <>
        <section id='ProjectsHome' className='flex flex-row flex-wrap items-center justify-center sm:gap-[40px] gap-[20px] w-full p-[20px] '>

            <Projeto Title='Security Tech' Text='Sistema onde pode colocar suas senhas, Sistema de Auth e CRUD, Em breve no ar.' To='https://securitytech.netlify.app'/>

            <Projeto Title='Nome do Projeto' Text='Descrição do Projeto' To=''/>

            <Projeto Title='Nome do Projeto' Text='Descrição do Projeto' To=''/>

        </section>
        </>
    );
}

export default ProjectsHome;