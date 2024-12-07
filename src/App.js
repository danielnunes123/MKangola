import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Conteiner  from '../src/layout/Conteiner';
import Home from './pages/Home';

function App() {
  return (
 <Router>
  <div id='nh'>
  <Navbar/>
  <Conteiner >
  <Routes>
   <Route exact path='/' element={<Home/>}/>
  </Routes>
  </Conteiner>
  </div>
 </Router>
  );
}

export default App;
