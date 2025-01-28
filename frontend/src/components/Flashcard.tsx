import React, { useEffect, useState } from "react";
import { Flashcard as FlashcardType } from "../flashcardsData"
import "../index.css"

// Display specific flashcard and allow it to be flipped
interface FlashcardProps { 
  // interface defines "blueprint" of FlashcardProps aka what properties it must have, their names and types
  card: FlashcardType
  // FlashcardType is what the card object must have aka id, question, and answer
  resetFlip: boolean
  onFlipReset: () => void
  // Callback function from App.tsx that has no parameters or return value (void). That's it's "type"
}

const Flashcard: React.FC<FlashcardProps> = ({ card, resetFlip, onFlipReset }) => {
    // React.FC: react functional component. Specifies expected props the component will have
    // <FlashcardProps>: specifies type of props the Flashcard component expects (card has to be FlashcardType, resetFlip has to be boolean, onFlipReset has to be function w no args or return)
    // ({bababa}): destructuring props object
  const [flipped, setFlipped] = useState(false)
    // React hook let's you automatically sets state of card to NOT flipped aka the question. Also destructuring
  const handleFlip = () => {
    // Function that changes the use state of "flipped" to true or false
    setFlipped(!flipped)
  }
  useEffect(() => {
    // Runs when resetFlip or onFlipReset changes
    if (resetFlip) {
      setFlipped(false)
      onFlipReset()
    }
    // So only if resetFlip is true, we run setFlipped to update the flipped state to false aka back to the question, and run onFlipReset which says that the flip has been reset
  },
  [resetFlip, onFlipReset])
  // Dependency array: which values useEffect needs to look at to see if they change. If these variables change, it will run the function

  return (
    <div onClick={handleFlip}
    className="flashcarddiv">
      {flipped ? card.answer : card.question}
      {/* If the card is flipped(true), show the answer, if the card is not flipped(false), show question */}
    </div>
  );
};

export default Flashcard
