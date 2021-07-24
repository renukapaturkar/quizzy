export type Option = {
    text: string,
    isRight: boolean
}


export type Question = {
    questionNo: string
    question: string,
    options: Option[]
    points: number

}

export type Quiz = {
    id:string,
    quizName: string,
    questions: Question[]
}