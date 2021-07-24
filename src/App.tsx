import './App.css';
import { Home } from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import { QuestionCard } from './pages/QuestionCard';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/avengers-quiz' element={<QuestionCard/>} />
        {/* <Route path='/results' element={<Home/>}/> */}
     </Routes>
    </>
  );
}

export default App;
