import React from 'react';
import ButtonCardProjectHome from './ButtonCardProjectHome';

function CardProjectHome({Title, Description, TextButton}) {

    return ( 
        <>
        <div className='overflow-hidden flex flex-col flex-nowrap items-center justify-center transition .3s min-w-[290px] w-[290px] sm:w-[380px] sm:h-[200px] h-[150px] dark:bg-sd bg-pl border-l-[3px] dark:border-pl border-sd hover:border-td rounded-[4px] shadow-lg hover:shadow-xl'>

            <div className='flex flex-row flex-nowrap items-center justify-center w-full h-[40px] min-h-[40px]'>

                <h1 className='flex flex-col flex-nowrap items-start justify-center w-full h-full pl-[8px] pr-[5px] text-left sm:text-[1.5rem] text-[1.25rem] dark:text-pl text-sd font-Sora font-[900]'>{Title}</h1>

            </div>

            <div className='flex flex-row flex-nowrap items-center justify-center w-full min-h-[65px] sm:min-h-[80px]'>

                <p className='w-full h-full pl-[8px] pr-[5px] text-justify sm:text-[1rem] text-[.75rem] dark:text-pl text-sd font-Sora font-[900]'>{Description}</p>

            </div>

            <div className='flex flex-row flex-nowrap items-center justify-start gap-[5px] w-full h-full pl-[8px] pr-[5px]'>

                <ButtonCardProjectHome TextButton={TextButton}/>

            </div>

            


        </div>
        </>
    );
}

export default CardProjectHome;