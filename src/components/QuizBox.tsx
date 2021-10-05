import { useNavigate } from "react-router-dom";
import { Quiz } from "../data/data.types";

export const QuizBox = ({ quizName, id }: Quiz) => {
  const navigate = useNavigate();

  return (
    <>

        <div className="flex flex-col w-full md:max-w-xl h-96 p-8 m-4 self-center border shadow-lg">
          <h1 className="text-3xl text-center font-semibold text-gray-800">
            {quizName}
          </h1>
          <div className="text-2xl md:text-xl text-center font-normal p-8 text-gray-800">
            8 Questions
          </div>

          <button
            className="bg-blue-900 p-4 w-2/4 text-2xl text-white font-semibold border rounded-lg self-center hover:bg-blue-700"
            onClick={() => navigate(`/${id}`)}
          >
            Start Quiz
          </button>
        </div>

    </>
  );
};
