import React from 'react';

function CardSkillHome({Title, Text}) {
    return ( 
        <>
        <div className='transition .3s flex flex-col flex-nowrap items-center justify-center gap-[5px] h-[150px] sm:h-[200px] min-w-[290px] w-[290px] sm:w-[380px] p-[10px] dark:bg-sd bg-pl shadow-lg hover:shadow-xl rounded-[4px] border-l-[3px] dark:border-pl border-sd hover:border-td'>

            <h1 className='w-full h-auto font-Sora font-[900] text-center sm:text-[1.5rem] text-[1.25rem] dark:text-pl text-sd'>{Title}</h1>

            <p className='w-full sm:w-[90%] h-auto font-Sora sm:font-[500] font-[600] text-center sm:text-[1rem] text-[.65rem] dark:text-pl text-sd'>{Text}</p>

        </div>
        </>
    );
}

export default CardSkillHome;