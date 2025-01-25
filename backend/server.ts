// Importing necessary types
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

interface Flashcard {
  id: number;
  term: string;
  definition: string;
}

let flashcards: Flashcard[] = [
  { id: 1, term: "Luigi", definition: "The name of Mario's brother" },
  { id: 2, term: "Link", definition: "The name of the hero that rescues Zelda" },
];

// Get all flashcards
app.get("/api/flashcards", (req: Request, res: Response) => {
  res.json(flashcards);
});

// Get a single flashcard by ID
app.get(
  "/api/flashcards/:id",
  (req: Request<{ id: string }>, res: Response) => {
    const card = flashcards.find((f) => f.id === parseInt(req.params.id));
    if (!card) return res.status(404).send("Flashcard not found");
    res.json(card);
  }
);

// Create a new flashcard
app.post(
  "/api/flashcards",
  (req: Request<{}, {}, { term: string; definition: string }>, res: Response) => {
    const newCard: Flashcard = {
      id: flashcards.length ? flashcards[flashcards.length - 1].id + 1 : 1,
      term: req.body.term,
      definition: req.body.definition,
    };
    flashcards.push(newCard);
    res.status(201).json(newCard);
  }
);

// Update a flashcard
app.put(
  "/api/flashcards/:id",
  (req: Request<{ id: string }, {}, { term: string; definition: string }>, res: Response) => {
    const card = flashcards.find((f) => f.id === parseInt(req.params.id));
    if (!card) return res.status(404).send("Flashcard not found");

    card.term = req.body.term || card.term;
    card.definition = req.body.definition || card.definition;
    res.json(card);
  }
);

// Delete a flashcard
app.delete(
  "/api/flashcards/:id",
  (req: Request<{ id: string }>, res: Response) => {
    const cardIndex = flashcards.findIndex((f) => f.id === parseInt(req.params.id));
    if (cardIndex === -1) return res.status(404).send("Flashcard not found");

    const deletedCard = flashcards.splice(cardIndex, 1);
    res.json(deletedCard);
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
