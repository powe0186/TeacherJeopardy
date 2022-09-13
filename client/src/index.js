import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import Categories from './Routes/Categories';
import MyGames from './Routes/MyGames';
import SignIn from './Routes/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainNav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="categories" element={<Categories />} />
          <Route path="mygames" element={<MyGames />} />
          <Route path="signin" element={<SignIn />} />

        </Route>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
