import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pages from './Pages/Pages';
import TaskOne from './Pages/TaskOne';
import TaskThree from './Pages/TaskThree';
import TaskTwo from './Pages/TaskTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Pages/>} />
        <Route path='/taskOne' element={<TaskOne/>} />
        <Route path='/taskTwo' element={<TaskTwo/>} />
        <Route path='/taskThree' element={<TaskThree/>} />
      </Routes> 
    </div>
  );
}

export default App;
