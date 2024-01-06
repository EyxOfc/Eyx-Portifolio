import React from 'react';
import { Link } from 'react-router-dom';

function FooterHome() {
    return ( 
        <>
        <footer className='flex flex-row flex-wrap items-start justify-start sm:gap-[20px] gap-[15px] w-full h-auto p-[20px]'>

            <ol className='flex flex-col flex-nowrap items-center justify-center w-[160px] sm:w-[190px]'>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[900] sm:text-[1.5rem] text-[1.25rem] dark:text-pl text-sd'>Redes</Link></li>
                <li className='h-[30px] w-full'><Link to='https://www.threads.net/@a.arj.ofc' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Threads</Link></li>
                <li className='h-[30px] w-full'><Link to='https://www.instagram.com/a.arj.ofc' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Instagram</Link></li>
                <li className='h-[30px] w-full'><Link to='https://github.com/EyxOfc' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Git Hub</Link></li>
                <li className='h-[30px] w-full'><Link to='https://www.linkedin.com/in/andrey-araujo-8724992a7/' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>LinkedIn</Link></li>
                <li className='h-[30px] w-full'><Link to='mailto:andrey.araujo.ofc@gmail.com' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Email</Link></li>
                <li className='h-[30px] w-full'><Link to='https://wa.me/5511954879771' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>WhatsApp</Link></li>
            </ol>

            <ol className='flex flex-col flex-nowrap items-center justify-center w-[160px] sm:w-[190px]'>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[900] sm:text-[1.5rem] text-[1.25rem] dark:text-pl text-sd'>Ultilizados</Link></li>
                <li className='h-[30px] w-full'><Link to='https://fonts.google.com/' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Google Fonts</Link></li>
                <li className='h-[30px] w-full'><Link to='https://icons8.com.br/' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Icons8</Link></li>
                <li className='h-[30px] w-full'><Link to='https://react-icons.github.io/react-icons/' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>React Icons</Link></li>
                <li className='h-[30px] w-full'><Link to='https://tailwindcss.com/' target='_blank' className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Tailwind Css</Link></li>
            </ol>

            <ol className='flex flex-col flex-nowrap items-center justify-center w-[160px] sm:w-[190px]'>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[900] sm:text-[1.5rem] text-[1.25rem] dark:text-pl text-sd'>Skills</Link></li>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Javascript</Link></li>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Node Js</Link></li>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>React Js</Link></li>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Figma</Link></li>
                <li className='h-[30px] w-full'><Link className='flex flex-row flex-nowrap items-center justify-start w-full h-full pl-[5px] font-Sora font-[600] sm:text-[1rem] text-[.75rem] dark:text-pl text-sd'>Tailwind Css</Link></li>
            </ol>

        </footer>
        </>
    );
}

export default FooterHome;