import React from 'react';

import { RiShareFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function AboutHome() {
    return ( 
        <>
        <section id='AboutHome' className='flex flex-col flex-nowrap items-center justify-center sm:gap-[15px] gap-[10px] w-full h-auto p-[20px]'>

            <h1 className='w-full sm:w-[80%] h-auto font-Sora font-[900] text-[1.5rem] sm:text-[2rem] text-center dark:text-pl text-sd'>Desenvolvimento Web UI & UX com a melhor <span className='text-td'>performance</span>.</h1>

            <p className='w-full sm:w-[80%] h-auto font-Sora font-[600] sm:text-[1rem] text-[.75rem] text-center dark:text-pl text-sd'>Jovem e Estudante de programação, Nascido em São Paulo, Estou em busca de entrar na área e me <span className='text-td'>desenvolver</span>.</p>

            <p className='w-full sm:w-[80%]  h-auto font-Sora font-[600] sm:text-[1rem] text-[.75rem] text-center dark:text-pl text-sd'>Seja Bem vindo ao meu portifólio, Visualize skills e projetos, Veja seu <span className='text-td'>futuro</span> no ar.</p>

            <Link to='https://wa.me/5511954879771' target='_blank' type="submit" className='transition .3s flex flex-row flex-nowrap items-center justify-center sm:gap-[10px] gap-[5px] dark:bg-white/10 bg-pl sm:h-[45px] h-[37px] sm:px-[24px] px-[16px] border-l-[3px] dark:border-pl border-sd hover:border-td rounded-sm shadow-md hover:shadow-lg'>

                <RiShareFill className='sm:w-[25px] sm:h-[25px] w-[20px] h-[20px] text-td'/>

                <span className='font-Sora font-[900] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Conecte Se</span>

            </Link>

        </section>
        </>
    );
}

export default AboutHome;