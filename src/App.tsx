import { useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { NavLink} from 'react-router-dom';
import { Content } from './components/Content';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from './store/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


function App() {

  

/*
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])*/

  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <nav className='App-nav'>
            <NavLink to={'/'}>All</NavLink>
            <NavLink to={'/active'}>Active</NavLink>
            <NavLink to={'/completed'}>Completed</NavLink>
          </nav>
        </header>
        <Content/>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
