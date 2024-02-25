import React from 'react';
import TituloProjeto from './TituloProjeto';
import ParagrafoProjeto from './ParagrafoProjeto';
import ButtonProjeto from './ButtonProjeto';

function Projeto() {
    return ( 
        <>
        <div className='transition .3s flex flex-col flex-nowrap items-start justify-center gap-[10px] w-[255px] h-[165px] p-[10px] bg-white shadow-lg hover:shadow-lg rounded-lg'>

            <TituloProjeto Title='Nome do projeto' />

            <ParagrafoProjeto Text='Descriçaõ do projeto' />

            <ButtonProjeto To='https://eyxcode.netlify.app'/>

        </div>
        </>
    );
}

export default Projeto;