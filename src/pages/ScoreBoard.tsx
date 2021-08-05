import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";

export type scoreboard = [
  {
    name: string;
    quizname: string;
    score: number;
  }
];

export const ScoreBoard = () => {
  const [data, setData] = useState<scoreboard>();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://quizzy-backend.renukapaturkar.repl.co/leaderboard"
        );
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-auto p-8 font-mono">
        <h1 className="text-3xl text-center font-semibold text-blue-800 p-4">
          Score Board
        </h1>
        <div className="flex flex-col w-full h-auto px-16 p-4">
          <table className="table-auto text-xl">
            <tr>
              <th className="px-16">Name</th>
              <th className="px-16">Quizname</th>
              <th className="px-16">Score</th>
            </tr>

            {data?.map((item) => {
              return (
                <tr className="text-center text-lg bg-blue-100">
                  <td className="p-4 px-16">{item.name}</td>
                  <td className=" px-16">{item.quizname}</td>
                  <td className=" px-16">{item.score}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
