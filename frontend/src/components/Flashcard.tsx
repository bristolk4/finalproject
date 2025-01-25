import React, { useState } from "react";
import { Flashcard as FlashcardType } from "../flashcardsData";

// Display specific flashcard and allow it to be flipped
// Interface specifies structure of data (properties it shoud have and types of properties)


interface FlashcardProps { // Defines the type for the props that the Flashcard component accepts
  card: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
    // React.FC<FlashcardProps> is the typescript way of how you would pass props in javascript
    // Passing card prop into flashcard so we can access it and call properties
  const [flipped, setFlipped] = useState(false);
    // Automatically sets state of card to NOT flipped aka the question
  const handleFlip = () => {
    // Function that changes the use state of "flipped" to true or false
    setFlipped(!flipped);
  };

  return (
    <div onClick={handleFlip}>
      {flipped ? card.definition : card.term}
      {/* If the card is flipped(true), show the answer, if the card is not flipped(false), show question */}
    </div>
  );
};

export default Flashcard;
