import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Quiz } from "../data/data.types";

export const QuizBox = ({quizName, id,...props}:Quiz) => {
    const navigate = useNavigate();
  //   const [initialData, setInitialData] = useState<Quiz>();
  //   useEffect(()=> {
  //     (async function(){
  //         try {
  //             const response = await axios.get("https://quizzy-backend.renukapaturkar.repl.co/quiz")
  //             // console.log(response.data.data)
  //             setInitialData(response?.data.data)
  //         }catch(error){
  //             console.log("error", error)
  //         }
  //     })();
  // }, [])

  // console.log(initialData)

    
  return (
    <>

            <div className="flex flex-col w-6/12 h-auto p-8 font-mono">
            <div className="flex flex-col w-9/12 h-96 p-8 m-4 self-center border shadow-lg">
              <h1 className="text-3xl text-center font-semibold text-gray-800">
                {quizName}
              </h1>
              <div className="text-2xl text-center font-normal p-8 text-gray-800">
                8 Questions
              </div>
      
              <button className="bg-blue-900 p-4 w-2/4 text-2xl text-white font-semibold border rounded-lg self-center hover:bg-blue-700"
              onClick={()=>navigate(`/${id}`)}>
                Start Quiz
              </button>
            </div>
          </div>



    </>
  );
};
