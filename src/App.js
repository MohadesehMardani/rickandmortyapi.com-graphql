import React, {Fragment} from 'react';
import Characters from './components/Characters';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
  <div className="grid-container">
     <Characters/>
  </div>
  </Provider>
);

export default App;
