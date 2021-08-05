import { useEffect, useState } from "react"
import axios from 'axios';

export const useInitialQuizData = () => {
    const [initialData, setInitialData] = useState([]);

    useEffect(()=> {
        (async function(){
            try {
                const response = await axios.get("https://quizzy-backend.renukapaturkar.repl.co/quiz")
                console.log(response.data.data)
                setInitialData(response.data.data)
                return initialData
            }catch(error){
                console.log("error", error)
            }
        })();
    }, [])
}