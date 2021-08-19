import './App.css';
import 'bulma/css/bulma.css';
import 'animate.css';
import {Provider} from 'react-redux';

//import { Login } from './components/auth/Login';
//import { EspaciosUser } from './pages/espacios-user/EspaciosUser';
import { AppRouter } from './routers/AppRouter';
import { store } from './redux/store/store';
//import { TareasEspacio } from './pages/tareas-espacio/TareasEspacio';

function App() {
  return (
    <Provider store={store} className="App">
      <AppRouter/>
    </Provider>
  );
}

export default App;
