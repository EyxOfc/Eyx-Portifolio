import React from 'react';

function ListaFooter({Children}) {
    return ( 
        <>
        <ol className='flex flex-col flex-nowrap items-center justify-center w-[160px] sm:w-[220px]'>
            {Children}
        </ol>
        </>
    );
}

export default ListaFooter;