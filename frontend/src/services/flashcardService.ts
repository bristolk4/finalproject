import axios from "axios";

const API_URL = "http://localhost:5000/api/flashcards";

// Fetch all flashcards
export const getFlashcards = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fetch a single flashcard
export const getFlashcard = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create a new flashcard
export const createFlashcard = async (term: string, definition: string) => {
  const response = await axios.post(API_URL, { term, definition });
  return response.data;
};

// Update a flashcard
export const updateFlashcard = async (id: number, term: string, definition: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { term, definition });
  return response.data;
};

// Delete a flashcard
export const deleteFlashcard = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
