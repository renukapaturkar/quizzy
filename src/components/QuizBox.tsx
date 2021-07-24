import { useNavigate } from "react-router-dom";
import { QuizOne } from "../data/data";

export const QuizBox = () => {
    const navigate = useNavigate();
    
  return (
    <div className="flex flex-col h-auto p-8  font-mono">
      <div className="flex flex-col w-2/6 h-96 p-8 self-center border shadow-lg">
        <h1 className="text-3xl text-center font-semibold text-gray-800">
          {QuizOne.quizName}
        </h1>
        <div className="text-2xl text-center font-normal p-8 text-gray-800">
          8 Questions
        </div>

        <button className="bg-blue-900 p-4 w-2/4 text-2xl text-white font-semibold border rounded-lg self-center hover:bg-blue-700"
        onClick={()=>navigate('/avengers-quiz')}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};
