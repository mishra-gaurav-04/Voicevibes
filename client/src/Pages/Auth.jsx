import React from 'react'
import { useState } from 'react'


const Auth = () => {
    const [toggle,setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className='text-white flex items-center justify-center container mx-auto sm:p-5 md:p-10 w-full'>
           {
              toggle ? (
                <div className='mt-64 border flex items-center flex-col gap-5 bg-[#1c1c1d] px-20 py-6 rounded-lg shadow-xl'>
                <h1 className='text-2xl font-bold md:text-4xl'>Sign Up</h1>
                <div className='flex flex-col gap-4'>
                    <input type="text" placeholder='email' className='bg-transparent border rounded-md px-3 py-1 text-lg text-center text-gray-400 focus:outline-none' />
                    <input type="password" placeholder='password' className='bg-transparent border rounded-md px-3 py-1 text-lg text-center text-gray-400 focus:outline-none' />
                    <input type="text" placeholder='username' className='bg-transparent border rounded-md px-3 py-1 text-lg text-center text-gray-400 focus:outline-none' />
                </div>
                <button className='bg-blue-700 px-10 py-1 text-lg rounded-lg cursor-pointer hover:bg-blue-500 border'>SignIn</button>
                <div className='flex items-center gap-4'>
                <p className='text-blue-700'>Already have an account?</p>
                <button className='text-blue-500 font-bold' onClick={handleToggle}>SignIn</button>
                </div>
            </div>
              ) : (
                <div className='mt-64 border flex items-center flex-col gap-5 bg-[#1c1c1d] px-20 py-6 rounded-lg shadow-xl'>
                <h1 className='text-2xl font-bold md:text-4xl'>Sign In</h1>
                <div className='flex flex-col gap-4'>
                    <input type="text" placeholder='email' className='bg-transparent border rounded-md px-3 py-1 text-lg text-center text-gray-400 focus:outline-none' />
                    <input type="password" placeholder='password' className='bg-transparent border rounded-md px-3 py-1 text-lg text-center text-gray-400 focus:outline-none' />
                </div>
                <button className='bg-blue-700 px-10 py-1 text-lg rounded-lg cursor-pointer hover:bg-blue-500 border'>SignIn</button>
                <div className='flex items-center gap-4'>
                <p className='text-blue-700'>Don't have an account? </p>
                <button className='text-blue-500 font-bold' onClick={handleToggle}>SignUp</button>
                </div>
            </div>
              )
           }
        </div>
    )
}

export default Auth