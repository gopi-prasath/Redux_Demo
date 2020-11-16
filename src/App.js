import './App.css';
import CakeContainer from './Component/CakeContainer';
import { Provider } from 'react-redux'
import store from './Redux/store'
import HooksCakeContainer from './Component/HooksCakeContainer';
import IceCreamContainer from './Component/IceCreamContainer';
import NewCakeContainer from './Component/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
