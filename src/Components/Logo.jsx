import React from 'react'

export function Logo({classname=""}) {
    

    return (
        <>
           <div class=" space gap-y-8 ">
        <img src="/src/Components/logo.jpeg" alt="logo" className={`rounded-full ml-[100px] h-[65px] w-[65px] border border-solid border-t-4 border-l-4 border-b-4 border-r-4  border-gray-200 ${classname} `}/>
       </div>
        </>
    )
}