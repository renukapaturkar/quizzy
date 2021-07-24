import {Question, Option} from '../data/data.types';

function calculateScore(currentScore: number, question:Question, selectedOption: Option): number{
    return selectedOption.isRight ? currentScore + question.points : currentScore
}

export {calculateScore}