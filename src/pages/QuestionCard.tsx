import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizOne } from "../data/data";

export const QuestionCard = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] =useState<number>(0);
    const [disable, setDisable] = useState<boolean>(false);
    const [color, setColor] = useState<boolean>(false);
    const navigate = useNavigate();

    const currentQuestionHandler = () => {
        if(currentQuestion >= 7){
            setCurrentQuestion(currentQuestion)                 
            navigate('/')
        }else {
            setCurrentQuestion(currentQuestion + 1)
            setDisable(!disable)
            setColor(false)
        }
    }
    const ScoreHandler = (isRight: boolean) => {
       
        if(isRight){
            setScore(score + 5)
        }else {
            setScore(score)
        }
        setDisable(!disable)
        setColor(true)
    }

    const colorHandler = (isRight: boolean) => {
        if(color){
            if(isRight){
                return "bg-green-500"
            }return "bg-red-500";
        }
        
        
    }

  return (
    <div className="flex flex-col p-8  font-mono">
      <div className="flex flex-col w-3/6 h-auto p-8 self-center border shadow-lg">
        <div className="text-2xl text-right font-semibold p-8 text-blue-900">Score: {score}</div>
        <h1 className="text-3xl text-center font-semibold text-gray-800">
          Question {QuizOne.questions[currentQuestion].questionNo}/{QuizOne.questions.length-1}
        </h1>
        <h1 className="text-2xl text-center font-normal p-8 text-gray-800">
          {QuizOne.questions[currentQuestion].question}
        </h1>
        {
            QuizOne.questions[currentQuestion].options.map((option)=> {
                return(
                    <button 
                    disabled={disable} 
                    value={option.text}
                    className={`p-4 w-4/5 text-2xl m-2 font-normal border rounded-lg self-center shadow-md 
                    ${colorHandler(option.isRight)}`}
                    onClick={()=>ScoreHandler(option.isRight)}>
                        {option.text}
                    </button>
                )
            })

        }

        <div className="flex justify-end p-2 text-blue-900 font-semibold">
          <button className="p-4 text-2xl" onClick={()=>setCurrentQuestion(0)}>Reset</button>
          <button className="p-4 text-2xl" onClick={currentQuestionHandler}>Next</button>
        </div>
      </div>
    </div>
  );
};
