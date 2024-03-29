import React from 'react';
import { RiVoiceprintLine } from "react-icons/ri";


const Navbar = () => {
    return (
        <nav className='text-white px-6 w-full py-3'>
            <div className='container mx-auto flex justify-between gap-3 items-center'>
                <div className='flex items-center text-lg md:text-2xl gap-3'>
                    <RiVoiceprintLine className='text-yellow-400' />
                    <h1>VoiceVibes</h1>
                </div>
                <button className='bg-blue-700 border border-slate-300 cursor-pointer hover:bg-blue-500 px-6 md:px-10 shadow-lg py-1 md:py-3 rounded-full'>SignIn</button>
            </div>
        </nav>
    )
}

export default Navbar