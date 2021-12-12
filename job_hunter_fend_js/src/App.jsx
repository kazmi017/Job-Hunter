import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import './App.scss';
import React, {  useEffect } from 'react';
import Home from './components/home/Home.jsx';
import Join from './components/login/Join.jsx'
import Dashboard from './components/dashboard/dashboard.jsx'
import {useSelector,useDispatch} from 'react-redux';
import { login } from "./features/userSlice";
import { selectUser } from './features/userSlice';
import {store} from "./store/store"



function App() {

  const dispatch=useDispatch();

  const data =useSelector(selectUser);
  useEffect(() => {
    console.log(store.getState)
  });


  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/join" element={<Join/>} /> */}
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/join"
        element={store.getState.isloggedIn===true ? <Dashboard/> : <Join /> }/>
    </Routes>
  </Router>
}

export default App;
