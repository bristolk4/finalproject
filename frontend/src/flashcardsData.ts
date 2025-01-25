// Setting up flashcard model and telling it how we want the data to be entered
// Each flashcard must have an id (with type of number), question, and answer (both with type string)

export interface Flashcard {
    id: number;
    term: string;
    definition: string;
  }
  
  // Hardcoding content
  export const flashcards: Flashcard[] = [
    {
      id: 1,
      term: "Luigi",
      definition: "The name of Mario's brother",
    },
    {
      id: 2,
      term: "Link",
      definition: "The name of the hero that rescues Zelda",
    },
    {
      id: 3,
      term: "Tails",
      definition: "The name of Sonic's sidekick",
    },
    {
      id: 4,
      term: "Street Fighter",
      definition: "The name of the series that features E. Honda, Dhalsim, and Chun Li",
    },
    {
      id: 5,
      term: "Eggman",
      definition: "The antagonist of Sonic the Hedgehog",
    },
    {
      id: 6,
      term: "Bowser",
      definition: "The antagonist of the Super Mario series",
    },
    {
      id: 7,
      term: "Gannon",
      definition: "The antagonist in the Legend of Zelda",
    },
    {
      id: 8,
      term: "Xbox",
      definition: "The gaming console created by Microsoft",
    },
    {
      id: 9,
      term: "Playstation",
      definition: "The gaming console created by Sony",
    },
    {
      id: 10,
      term: "Jumpman",
      definition: "The original name of Super Mario",
    },
    {
      id: 11,
      term: "Super Nintendo",
      definition: "The name of the 16 bit console created by Nintendo",
    },
    {
      id: 12,
      term: "Croft",
      definition: "The last name of the main character in the Tomb Raider series",
    },
    {
      id: 13,
      term: "Halo",
      definition: "The Covenant is a factional military alien race in this game",
    },
    {
      id: 14,
      term: "Pacman",
      definition: "Character created by NAMCO that eats pellets, fruits and ghosts",
    },
    {
      id: 15,
      term: "Pokemon",
      definition: "The gaming series that is called Pocket Monsters in Japan",
    },
    {
      id: 16,
      term: "Samus",
      definition: "The name of the female protagonist in the Metroid series",
    },
    {
      id: 17,
      term: "Overwatch",
      definition: "An FPS (First person shooter) created by Blizzard that features characters such as Zarya, Soldier: 76 and Bastion",
    },
    {
      id: 18,
      term: "Toad",
      definition: "The name of Mario's mushroom companion",
    },
    {
      id: 19,
      term: "Gameboy",
      definition: "The name of Nintendo's 1st mobile console",
    },
    {
      id: 20,
      term: "Peach",
      definition: "The name of the princess in the Super Mario Series",
    },
  ];
  