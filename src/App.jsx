import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Auth';
import Home from './Home';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home'  element={<Home/>} />
        <Route  path='/'  element={<Auth/>} />
        <Route  path='/register'  element={<Auth register />} />

      </Routes>
    </div>
  );
}

export default App;
