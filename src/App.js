import './App.css';
import Typewriter from 'typewriter-effect'


function App() {
  return (
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

  );
}

export default App;
