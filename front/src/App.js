import { socket } from './socket';
import Header from './components/ui/Header';
import SearchLayout from './components/ui/SearchLayout';

function App() {

  socket.on('connect', ()=> {
    console.log('Connected');
  })

  socket.on('prueba', (data) => console.log(data));

  return (
    <div className="">
      <Header />
      <SearchLayout />
    </div>
  );
}

export default App;
