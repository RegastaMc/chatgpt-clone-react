import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline'


const Homepage = () => {
  return (
    <div className='flex flex-col items-center h-screen justify-center'>
      <h1 className='text-5xl text-white font-bold mb-20'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
  
            <SunIcon className="h-8 w-8 text-white"/>
            {/* sun icon */}
            <h2>Examples</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>Explain something to me</p>
            <p className='infoText'>What is the difference between a cat and a dog?/</p>
            <p className='infoText'>What is the color of the sun?</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
  
            <BoltIcon className="h-8 w-8 text-white"/>
            {/* sun icon */}
            <h2>Capabilities</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>Explain something to me</p>
            <p className='infoText'>What is the difference between a cat and a dog?/</p>
            <p className='infoText'>What is the color of the sun?</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
              <ExclamationTriangleIcon className="h-8 w-8 text-white"/>
            {/* sun icon */}
            <h2>Limitations</h2>
          </div>

          <div className='space-y-2'>
            <p className='infoText'>Explain something to me</p>
            <p className='infoText'>What is the difference between a cat and a dog?/</p>
            <p className='infoText'>What is the color of the sun?</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage