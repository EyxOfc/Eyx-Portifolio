import React from 'react';
import Mode from './Mode';
import ButtonHeader from './ButtonHeader';

function Header() {
    return ( 
        <>
        <header className='fixed top-0 left-0 flex flex-row flex-nowrap items-center justify-between gap-[10px] transition .3s w-full h-[60px] sm:h-[100px] px-[10px] sm:px-[20px] bg-white/25 dark:bg-white/10 shadow-md hover:shadow-lg backdrop-blur-[5px]'>

            <nav className='flex flex-row flex-nowrap items-center justify-center gap-[5px] sm:gap-[10px] w-auto h-auto'>

                <ButtonHeader Text='Sobre' To='#AboutHome' />
                <ButtonHeader Text='Skills' To='#SkillsHome' />
                <ButtonHeader Text='Projetos' To='#ProjectsHome' />
                <ButtonHeader Text='Redes' To='#RedeHome' />

            </nav>

            <Mode />

        </header>
        </>
    );
}

export default Header;