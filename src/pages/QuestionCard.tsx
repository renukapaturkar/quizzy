import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Option, Quiz} from "../data/data.types";
import axios from 'axios';
import { Navbar } from "../components/Navbar";
import {Link} from 'react-router-dom';

export const QuestionCard = () => {
    const [data, setData] = useState<Quiz>();
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const {id} =useParams();
    const [score, setScore] =useState<number>(0);
    const [disable, setDisable] = useState<boolean>(false);
    const [color, setColor] = useState<boolean>(false);
    const [scoreBoard, setScoreBoard] = useState<boolean>(false);
    const [name, setName] = useState<string>("");


    useEffect(()=>{
      (async function(){
        try {
          const response = await axios.get(`https://quizzy-backend.renukapaturkar.repl.co/quiz/${id}`)
          setData(response.data.data)
        }catch(error){
          console.log("error =>", error)
        }
      })()
    },[]);

    const currentQuestionHandler = () => {
        if(currentQuestion >= 8){
            setCurrentQuestion(currentQuestion) 
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

    // const setNameHandler = (e:any) =>{
    //   setName(e.target.value)
    // }

    const saveToScoreBoard = async() => {
      if(name !== ""){
        try {
          const response = await axios.post('https://quizzy-backend.renukapaturkar.repl.co/leaderboard', 
          {
            name:name,
            quizname:data?.quizName,
            score:score
          })
          console.log(response)
          if(response.status === 200){
            console.log("saved score successfully!")
          }
        }catch(error){
          console.log(error)
        }finally {
          setName("")
          setScoreBoard(false)
        }
      }
    }

    const Results = () => {
      return (
        <>
          <Navbar/>
          <div className="flex flex-col w-full h-auto p-8 font-mono">
            <div className="flex flex-col w-9/12 h-96 p-8 m-4 self-center border shadow-lg">
              <h1 className="text-3xl text-center font-bold text-blue-800">
                Result
              </h1>
              <div className="text-2xl text-center font-semibold p-8 text-gray-800">
                Final Score {score}
              </div>

    
              <Link to='/scoreboard' className="bg-blue-900 p-4 w-1/4 text-xl text-white font-medium border rounded-lg self-center text-center hover:bg-blue-700">
                Scoreboard
              </Link>

              <div className="text-sm text-center p-2">
                Do you want to save your score? <span className="font-semibold text-blue-800 cursor-pointer" onClick={()=>setScoreBoard(true)}>Yes</span>
              </div>

              {
                scoreBoard && (
                  <div className="self-center p-2">
                    <input type="text" value={name} placeholder="Your Name" className="border text-md self-center p-2" onChange={(e)=>setName(e.target.value)} autoFocus/>
                    <button className="border bg-blue-800 text-white rounded-md text-sm p-2" onClick={()=>saveToScoreBoard()}>Save</button>
                  </div>
                )
              }

            </div>
          </div>
        </>
      );
    };
    

  return (
    <>
    {
      currentQuestion>=8 ? <Results/> : (

        <div className="flex flex-col p-8  font-mono">
        <div className="flex flex-col w-3/6 h-auto p-8 self-center border shadow-lg">
          <div className="text-2xl text-right font-semibold p-8 text-blue-900">Score: {score}</div>
          <h1 className="text-3xl text-center font-semibold text-gray-800">
            Question {data?.questions[currentQuestion].questionNo}/{data?.questions.length}
          </h1>
          <h1 className="text-2xl text-center font-normal p-8 text-gray-800">
            {data?.questions[currentQuestion].question}
          </h1>
          {
              data?.questions[currentQuestion].options.map((option:Option)=> {
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
      )
    }
    </>

  );
};
