import React from 'react';

import { RiShareFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function AboutHome() {
    return ( 
        <>
        <section id='AboutHome' className='flex flex-col flex-nowrap items-center justify-center gap-[10px] w-full h-auto p-[20px]'>

            <h1 className='w-full h-auto font-Sora font-[900] text-[1.5rem] text-center dark:text-pl text-sd'>Desenvolvimento Web UI & UX com a melhor <span className='text-td'>performance</span>.</h1>

            <p className='w-full h-auto font-Sora font-[600] text-[.75rem] text-center dark:text-pl text-sd'>Jovem e Estudante de programação, Nascido em São Paulo, Estou em busca de entrar na área e me <span className='text-td'>desenvolver</span>.</p>

            <p className='w-full h-auto font-Sora font-[600] text-[.75rem] text-center dark:text-pl text-sd'>Seja Bem vindo ao meu portifólio, Visualize skills e projetos, Veja seu <span className='text-td'>futuro</span> no ar.</p>

            <Link to='https://wa.me/5511954879771' target='_blank' type="submit" className='transition .3s flex flex-row flex-nowrap items-center justify-center gap-[5px] dark:bg-white/10 bg-pl h-[37px] px-[16px] border-l-[3px] dark:border-pl border-sd hover:border-td rounded-sm shadow-md hover:shadow-lg'>

                <RiShareFill className='text-td' size={20}/>

                <span className='font-Sora font-[900] text-[.75rem] dark:text-pl text-sd'>Conecte Se</span>

            </Link>

        </section>
        </>
    );
}

export default AboutHome;