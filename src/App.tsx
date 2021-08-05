import './App.css';
import { Home } from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import { QuestionCard } from './pages/QuestionCard';
import { ScoreBoard } from './pages/ScoreBoard';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/:id' element={<QuestionCard/>} />
        <Route path='/scoreboard' element={<ScoreBoard/>}/>        
     </Routes>
    </>
  );
}

export default App;
