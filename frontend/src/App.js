import './App.css';
import Navegation from './components/navegation';
import {Register} from './components/register'
import Home from './components/home';
import Consult from './components/consult';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navegation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register_view" element={<Register />} /> 
          <Route path="/consult_view" element={<Consult />} />
        </Routes>
      </BrowserRouter>      
    </div>    
  );
}

export default App;
