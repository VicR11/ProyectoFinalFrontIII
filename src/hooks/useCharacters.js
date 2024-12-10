import { useState, useEffect } from "react";
import { getCharacters } from "../services/getCharacters";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((response) => setCharacters(response));
  }, []);

  return { characters };
};
