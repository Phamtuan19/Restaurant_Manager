import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import InitialApp from './component/customs/InitialApp';
import CoreConfirmProvider from './component/customs/@mui/CoreConfirmProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <InitialApp>
         <CoreConfirmProvider>
            <App />
         </CoreConfirmProvider>
      </InitialApp>
   </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
