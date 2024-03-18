/* import { socket } from './socket'; */
import { Routes, Route } from 'react-router-dom'
/* IMPORTACION DE PAGINAS */
import Homepage from './content/Homepage';
import Login from './content/Login';
import SignUp from './content/SignUp'
import { Step1, Step2, Step3, Step4 } from './components/ui/Steps'

function App() {

  /* socket.on('connect', ()=> {
    console.log('Connected');
  })

  socket.on('prueba', (data) => console.log(data)); */

  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/step1' element={<Step1 />}/>
        <Route path='/step2' element={<Step2 />}/>
        <Route path='/step3' element={<Step3 />}/>
        <Route path='/step4' element={<Step4 />}/>
      </Routes>
    </div>
  );
}

export default App;
