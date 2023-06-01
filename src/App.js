
import './App.css';
import Create from './Components/Create';
import { Route , Routes } from 'react-router-dom';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div>

      <Routes>
      <Route path='/createnewuser' element={<Create/>} />
      <Route path='/update/:id' element={<Update/>} />
        <Route path='/' element={<Read/>} />
      
      </Routes>
    </div>
  );
}

export default App;
