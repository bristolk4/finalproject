// Setting up flashcard model and telling it how we want the data to be entered
// Each flashcard has this "blueprint" and must have these properties: an id (with type of number), question, and answer (both with type string). Typescript makes you put the type
// An interface in typescript defines the structure that objects must abide by

export interface Flashcard {
  id: number
  question: string
  answer: string
}

// Flashcard[] means this is going to be an array with the same "blueprint" as interface Flashcard
export const flashcards: Flashcard[] = [
  {
    id: 1,
    question: "Who created the Legend of Zelda series?",
    answer: "Shigeru Miyamoto",
  },
  {
    id: 2,
    question: "What year was the original The Legend of Zelda game released?",
    answer: "1986",
  },  
  {
    id: 3,
    question: "What was the first Zelda game to feature 3D graphics?",
    answer: "Ocarina of Time",
  },  
  {
    id: 4,
    question: "Which Zelda game introduced the Master Sword?",
    answer: "A Link to the Past",
  },  
  {
    id: 5,
    question: "What feature in Breath of the Wild was a series first?",
    answer: "Open-world gameplay",
  },  
  {
    id: 6,
    question: "Which Zelda game features a 72-hour time cycle?",
    answer: "Majora's Mask",
  },  
  {
    id: 7,
    question: "What is the name of Link's boat in The Wind Waker?",
    answer: "The King of Red Lions",
  },  
  {
    id: 8,
    question: "Which Zelda game is the first in the series' timeline?",
    answer: "Skyward Sword",
  },  
  {
    id: 9,
    question: "What race does Ganondorf belong to?",
    answer: "Gerudo",
  },  
  {
    id: 10,
    question: "What is the Triforce, and what does it represent?",
    answer: "A sacred relic that represents power, courage, and wisdom",
  },  
  {
    id: 11,
    question: "In the original Zelda, you didn't need a special item to make a raft move. In BOTW, you need a... ",
    answer: "Korok Leaf",
  },
  {
    id: 12,
    question: "The hookshot first appears in which Zelda game?",
    answer: "A Link to the Past",
  },
  {
    id: 13,
    question: "True or False: The Triforce appears in the original NES game?",
    answer: "True",
  },
  {
    id: 14,
    question: "In Skyward Sword, how many times do you fight Ghirahim?",
    answer: "3",
  },
  {
    id: 15,
    question: "In Twilight Princess, how many golden bugs do you need to give to Agatha in order to recieve the giant's wallet?",
    answer: "24",
  },
];
