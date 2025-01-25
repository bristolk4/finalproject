import React, { useState, useEffect } from "react";
import Flashcard from "./components/Flashcard";
import { getFlashcards } from "./services/flashcardService";

const App: React.FC = () => {
  // Declaring App in typescript with no props because we don't need any
  // React.FC stands for react functional component
  const [currentIndex, setCurrentIndex] = useState(0);
  // Setting state of currentIndex aka current card (by the index number)
  // currentIndex = state variable that is what card is being displayed, setCurrentIndex is a function that updates this
  // Initial state is set to 0, aka the first flashcard in the list (index spot 0)
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlashcards();
      setFlashcards(data);
    };

    fetchData();
  }, []);

  // Handling moving to the next card
  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      // currentIndex = index of current card
      // flashcards.length - 1 = index of last card in array
      // Condition is checking whether current index is smaller than the last. If on last card, this function won't work because the currentIndex > flashcards.length - 1
      setCurrentIndex(currentIndex + 1);
      // If that condition is true, current index will be increased by one and moved to next card
    }
  };

  // Handling switching to previous card
  const handlePrevious = () => {
    if (currentIndex > 0) {
      // Saying the opposite thing from currentIndex < flashcards.length - 1. So if you're on the first card, this function won't run
      setCurrentIndex(currentIndex - 1);
      // If that condition is true, current index will be decreased by 1 and you move to the previous card
    }
  };

  return (
    <div>
      <h1>Flashcard App</h1>
      <Flashcard card={flashcards[currentIndex]} /> 
      {/* Setting display to current flashcard */}
      <div>
        <button
        // Button that goes to previous card
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          // Disables button if you're on the first card
          className="prevButton"
        >
          Previous
        </button>
        <button
        // Button that goes to next card
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          // Disables button if you're on the last card
          className="nextButton"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
