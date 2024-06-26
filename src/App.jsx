import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Home from './Home';
import Regdata from './Regdata';
import PageNotFound from './PageNotFound';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/regdata' element={<Regdata/>}/>
        <Route path='/home'  element={<Home/>} />
        <Route  path='/'  element={<Auth/>} />
        <Route  path='/register'  element={<Auth register />} />
        <Route path='/*' element={<PageNotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
