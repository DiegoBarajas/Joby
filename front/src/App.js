/* import { socket } from './socket'; */
import { Routes, Route } from 'react-router-dom'
/* IMPORTACION DE PAGINAS */
import Homepage from './content/Homepage';
import Login from './content/login';
import SignUp from './content/SignUp'
import { Step1, Step2, Step3, Step4 } from './components/ui/Steps'

// RUTAS
import LoggedRoute from './routes/LoggedRoute';
import UnloggedRoute from './routes/UnloggedRoute';

function App() {

  /* socket.on('connect', ()=> {
    console.log('Connected');
  })

  socket.on('prueba', (data) => console.log(data)); */

  const [img, setImg] = useState('');

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.post('http://localhost:8080/api/login/',{
        email: 'desaubv@gmail.com',
        password: 'diego382004'
      })

      const blob = new Blob([data.pic], { type: 'image/jpeg' }); // Puedes ajustar el tipo de imagen según corresponda
      const imageUrl = URL.createObjectURL(blob);

      console.log(blob);


      setImg( imageUrl );
    }
  
    getData();
  }, [])
  

  return (
    <div className="">
      <Routes>
        <Route path='/' element={ <LoggedRoute> <Homepage /> </LoggedRoute> }/>
        <Route path='/login' element={ <UnloggedRoute> <Login /> </UnloggedRoute> } />
        <Route path='/signup' element={ <UnloggedRoute> <SignUp /> </UnloggedRoute> }/>
        <Route path='/step1' element={<Step1 />}/>
        <Route path='/step2' element={<Step2 />}/>
        <Route path='/step3' element={<Step3 />}/>
        <Route path='/step4' element={<Step4 />}/>
      </Routes>
    </div>
  );
}

export default App;
