import React from 'react';
import TituloProjeto from './TituloProjeto';
import ParagrafoProjeto from './ParagrafoProjeto';
import ButtonProjeto from './ButtonProjeto';

function Projeto({Title, Text, To}) {
    return ( 
        <>
        <div className='transition .3s flex flex-col flex-nowrap items-start justify-center gap-[10px] w-[255px] sm:w-[350px] h-[165px] sm:h-[225px] p-[10px] bg-white shadow-lg hover:shadow-lg rounded-lg'>

            <TituloProjeto Title={Title} />

            <ParagrafoProjeto Text={Text} />

            <ButtonProjeto To={To}/>

        </div>
        </>
    );
}

export default Projeto;