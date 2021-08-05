import { Quiz } from "./data.types";
export const QuizOne: Quiz = {
  id: "avengersquiz",
  quizName: "Marvel Cinemantic Universe",
  questions: [
    {
      questionNo: "1",
      question: "Where does the Rocket Racoon spend most if his time?",
      options: [
        {
          text: "On Earth",
          isRight: false,
        },
        {
          text: "In Space",
          isRight: true,
        },
        {
          text: "Under the sea",
          isRight: false,
        },
        {
          text: "In the bins",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "2",
      question: "What is the strongest metal in the Marvel Universe?",
      options: [
        {
          text: "Freluminum",
          isRight: false,
        },
        {
          text: "Verstognium",
          isRight: false,
        },
        {
          text: "Aluminium",
          isRight: false,
        },
        {
          text: "Vibranium",
          isRight: true,
        },
      ],
      points: 5,
    },

    {
      questionNo: "3",
      question: "Who is the leader of S.H.I.E.L.D?",
      options: [
        {
          text: "Nick Fury",
          isRight: true,
        },
        {
          text: "Tony Stark",
          isRight: false,
        },
        {
          text: "Diana Prince",
          isRight: false,
        },
        {
          text: "Maria Hill",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "4",
      question: "In which US city do the Avengers battle the Chitauri?",
      options: [
        {
          text: "Los Angeles",
          isRight: false,
        },
        {
          text: "New York city",
          isRight: true,
        },
        {
          text: "Washington DC",
          isRight: false,
        },
        {
          text: "Miami",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "5",
      question:
        "Who diverts a nuclear missile into a wormhole and defeats the Chitauri army?",
      options: [
        {
          text: "Black widow",
          isRight: false,
        },
        {
          text: "The Hulk",
          isRight: false,
        },
        {
          text: "Iron man",
          isRight: true,
        },
        {
          text: "Spider-Man",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "6",
      question:
        "Who sells Ultron Vibranium and instantly makes $1.285 billion?",
      options: [
        {
          text: "Maria Hill",
          isRight: false,
        },
        {
          text: "Diana Prince",
          isRight: false,
        },
        {
          text: "Ulysses Klaue",
          isRight: true,
        },
        {
          text: "Tony Stark",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "7",
      question: "In the films, what does S.H.I.E.L.D. stand for?",
      options: [
        {
          text: "Supreme Headquarters,International Espionage, Law Inforcement Division",
          isRight: false,
        },
        {
          text: "Strategic Homeland Intervention, Enforcement and Logistic Division",
          isRight: true,
        },
        {
          text: "Strategic Hazard Intervention Espionage Logistic Division",
          isRight: false,
        },
        {
          text: "This is no acronym",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "8",
      question: "What's Agent Coulson's first name?",
      options: [
        {
          text: "Paul",
          isRight: false,
        },
        {
          text: "Phil",
          isRight: true,
        },
        {
          text: "Colin",
          isRight: false,
        },
        {
          text: "Alan",
          isRight: false,
        },
      ],
      points: 5,
    },
  ],
};

export const QuizTwo: Quiz = {
  id: "LOTRquiz",
  quizName: "The Lord of the Rings",
  questions: [
    {
      questionNo: "1",
      question: "Who possesses the ring of power at the start of the trilogy?",
      options: [
        {
          text: "Gandalf",
          isRight: false,
        },
        {
          text: "Bilbo",
          isRight: true,
        },
        {
          text: "Frodo",
          isRight: false,
        },
        {
          text: "Sauron",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "2",
      question: " Who do the hobbits encounter at the Prancing Pony?",
      options: [
        {
          text: "Gandalf",
          isRight: false,
        },
        {
          text: "Legolas",
          isRight: false,
        },
        {
          text: "Strider",
          isRight: true,
        },
        {
          text: "Boromir",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "3",
      question: "How many members make up the fellowship of the ring?",
      options: [
        {
          text: "Seven",
          isRight: false,
        },
        {
          text: "Eight",
          isRight: false,
        },
        {
          text: "Nine",
          isRight: true,
        },
        {
          text: "Ten",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "4",
      question:
        " When the pass of Caradhras is blocked, where does Frodo say the fellowship should go?",
      options: [
        {
          text: "Rivendell",
          isRight: false,
        },
        {
          text: "Moria",
          isRight: true,
        },
        {
          text: "Lothlorien",
          isRight: false,
        },
        {
          text: "Minas Tirith",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "5",
      question:
        "Who is the first member of the fellowship to be separated from the group?",
      options: [
        {
          text: "Aragorn",
          isRight: false,
        },
        {
          text: "Legolas",
          isRight: false,
        },
        {
          text: "Boromir",
          isRight: false,
        },
        {
          text: "Gandalf",
          isRight: true,
        },
      ],
      points: 5,
    },

    {
      questionNo: "6",
      question: " Where is Saruman’s tower, Orthanc, located?",
      options: [
        {
          text: "Isengard",
          isRight: true,
        },
        {
          text: "Rivendell",
          isRight: false,
        },
        {
          text: "Helm’s Deep",
          isRight: false,
        },
        {
          text: "Minas Tirith",
          isRight: false,
        },
      ],
      points: 5,
    },

    {
      questionNo: "7",
      question: "What is the name of the capital of Gondor?",
      options: [
        {
          text: "Cirith Ungol",
          isRight: false,
        },
        {
          text: "Osgiliath",
          isRight: false,
        },
        {
          text: "Minas Tirith",
          isRight: true,
        },
        {
          text: "Helm’s Deep",
          isRight: false,
        },
      ],
      points: 5,
    },
    {
      questionNo: "8",
      question: "Who departs with the elves at the trilogy’s conclusion?",
      options: [
        {
          text: "Bilbo",
          isRight: false,
        },
        {
          text: "Gandalf",
          isRight: false,
        },
        {
          text: "Frodo",
          isRight: false,
        },
        {
          text: "All of them",
          isRight: true,
        },
      ],
      points: 5,
    },
  ],
};
