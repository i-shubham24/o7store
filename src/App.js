import './App.css';
import Nav from './components/nav.jsx';
import Stationary from './components/stationary.jsx';
import Printing from './components/printing.jsx';
import Invoice from './components/invoice.jsx'; 
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <route path="/" element={<Home/>}/>
        <route path="/stationary" element={<Stationary/>}/> 
        <route path="/printing" element={<Printing/>}/>
        <route path="/invoice" element={<Invoice/>}/>
      </Routes>
    </div>
  );
}

export default App;
