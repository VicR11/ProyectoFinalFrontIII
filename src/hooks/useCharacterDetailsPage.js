

import { useState, useEffect } from "react";
import { getCharacter } from "../services/getCharacter"; 


export const useCharacterDetailsPage = (id) => {
   
  const [character, setCharacter] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const data = await getCharacter(id); 
        setCharacter(data);
      } catch (err) {
        setError("Error al cargar los detalles del personaje.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character, loading, error };

}