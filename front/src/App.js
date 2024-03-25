import { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg';
import { socket } from './socket';
import './App.css';

function App() {

  socket.on('connect', ()=> {
    console.log('Connected');
  })

  socket.on('prueba', (data) => console.log(data));

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
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
