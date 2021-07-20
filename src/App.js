import './App.css';
import 'bulma/css/bulma.css'
//import { Login } from './components/auth/Login';
//import { EspaciosUser } from './pages/espacios-user/EspaciosUser';
import { AppRouter } from './routers/AppRouter';
//import { TareasEspacio } from './pages/tareas-espacio/TareasEspacio';

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
