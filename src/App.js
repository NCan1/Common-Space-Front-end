import './App.css';
import 'bulma/css/bulma.css'
//import { Login } from './components/auth/Login';
import { EspaciosUser } from './pages/espacios-user/EspaciosUser';
//import { TareasEspacio } from './pages/tareas-espacio/TareasEspacio';

function App() {
  return (
    <div className="App">
      <EspaciosUser/>
    </div>
  );
}

export default App;
