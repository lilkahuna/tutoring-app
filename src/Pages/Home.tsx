import React from 'react'
//import Typewriter from 'typewriter-effect'
import {Link} from 'react-router-dom'
import { Wave } from '../Components/Wave';

const Home = () => {

    return (
        <>

            <div>

                <h1 className='text-center text-sky-500 text-5xl m-12'>Nicole Liverman's Tutoring Service</h1>
                
                
                {/** <p className='text-center text-sky-400 text-3xl m-5'>
                    <Typewriter onInit={(typewriter: any) => {
                        typewriter.typeString('I\'m a science teacher').start().pauseFor(1000).deleteChars(15)
                            .typeString('mother').pauseFor(1000).deleteChars(6).pauseFor(1000).typeString('tutor')
                    }}>

                    </Typewriter>
                </p> */}
                
                <p className='text-center text-sky-400 text-3xl m-5'>Get help in multiple subjects by an experienced tutor!</p>
            </div>

            <div className='mt-10 bg-gradient-to-t from-yellow-200 via-30% to-sky-300 
  rounded-2xl shadow-lg justify-evenly flex flex-row mx-6 p-5'>

                <div className='flex flex-col border-s-slate-50 p-2 mx-3 w-1/4 text-center border-double border-2 border-white rounded-xl'>

                    <h1 className='text-xl'>Get an Appointment Now</h1>

                    <p className='my-6 text-md text-sky-950'>Book a tutoring appointment today and gain confidence in
                        subjects like math, science, and English with the guidance of an experienced and dedicated tutor.</p>

                    <Link to='/schedule' className='bg-transparent hover:bg-blue-500 text-blue-700 
                        font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Schedule Now
                    </Link>
                    
                </div>

                <div className='flex flex-col border-s-slate-50 p-2 mx-3 w-1/4 text-center border-double border-2 border-white rounded-xl'>

                    <h1 className='text-xl'>Nicole's Qualifications</h1>

                    <p className='my-6 text-md text-sky-950'>Discover the exceptional qualifications and expertise that make me the ideal candidate
                        for your needs.</p>

                    <Link to="/qualifications" className='bg-transparent hover:bg-blue-500 text-blue-700 
                        font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Qualifications
                    </Link>
                    
                </div>

            </div>
            <Wave />
        </>
    )
}

export default Home;