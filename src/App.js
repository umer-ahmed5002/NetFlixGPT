import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Brows from './components/Brows';

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
   
      <Routes>
      
            <Route path='/' element={<Body />} />
            <Route path='/brows' element={<Brows />} />
            <Route path='*' element={<p>404</p>} />

      </Routes>
      </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;
