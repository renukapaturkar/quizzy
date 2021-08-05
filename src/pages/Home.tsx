import { Navbar } from "../components/Navbar";
import { QuizBox } from "../components/QuizBox";
import { QuizOne, QuizTwo } from "../data/data";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap">
        <QuizBox {...QuizOne} />
        <QuizBox {...QuizTwo} />
      </div>
    </>
  );
}
