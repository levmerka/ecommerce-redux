import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './app/store'
import {Provider} from 'react-redux'
import { Counter } from './features/counter/Counter';
ReactDOM.render(
<Provider store={store}>
  <React.StrictMode>
    <App>
      <Counter/>
    </App>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
