import { useState, useEffect } from "react";

export const useFavorites = () => {
 
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

 
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

 
  const addToFavorite = (character) => {
    if (!favorites.some((fav) => fav.id === character.id)) {
      setFavorites((prevState) => [...prevState, character]);
      console.log(`${character.name} agregado a favoritos`);
    } else {
      console.log(`${character.name} ya está en favoritos`);
    }
  };

 
  const deleteToFavorite = (id) => {
    setFavorites((prevState) => prevState.filter((item) => item.id !== id));
    console.log(`Personaje con id ${id} eliminado de favoritos`);
  };

  
  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return { favorites, addToFavorite, deleteToFavorite, isFavorite };
};
