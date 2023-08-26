"use client"
import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='bg-[#47854b] h-screen flex flex-col items-center justify-center text-center'>
        <Image
            src="https://links.papareact.com/2i6"
            alt='logo'
            width={300}
            height={300}
        />
        <button className='text-white font-bold text-3xl animate-pulse'
            onClick={()=>signIn("google")}
        >Sign In to use ChatGpt</button>
    </div>
  )
}

export default Login