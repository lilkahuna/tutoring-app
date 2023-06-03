import './App.css';
import Typewriter from 'typewriter-effect'
import { Wave } from './Components/Wave'; 

function App() {
  return (
    <>

      <div>

        <h1 className='text-center text-sky-500 text-5xl m-12'>Nicole Liverman's Tutoring Service</h1>

        <p className='text-center text-sky-400 text-3xl m-5'>
          <Typewriter onInit={(typewriter) => {
            typewriter.typeString('Im a science teacher').start().pauseFor(1000).deleteChars(15)
              .typeString('mother').pauseFor(1000).deleteChars(6).pauseFor(1000).typeString('tutor')
          }}>

          </Typewriter>
        </p>
      </div>
      
      <div className='bg-gradient-to-t from-yellow-200 via-30% to-sky-300 
        rounded-2xl shadow-lg justify-evenly flex flex-row mx-6 p-5'> 
          
          <div className='border-s-slate-50 p-2 mx-3 w-1/4 text-center border-double border-2 border-white rounded-xl'>
            
            <h1 className='text-xl'>Get an Appointment Now</h1>  

            <p className='my-4 text-md text-sky-950'>Book a tutoring appointment today and gain confidence in 
              subjects like math, science, and English with the guidance of an experienced and dedicated tutor.</p>
            
            <button className=''>Schedual Now</button>
          </div>
          
          <div className='border-s-slate-50 mx-3 '>
            <h2 className='text-xl'>Nicoles Qualifications</h2>
          </div>

      </div>
      
      <Wave />
    </>
  );
}

export default App;