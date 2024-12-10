import { createContext, useContext, useState } from "react";
import { useFavorites } from "../hooks/useFavorites";

const CharacterContext = createContext(
    {
        favorites: [],
        addToFavorite: () => {},
        deleteToFavorite: () => {},
        isFavorite: () => false,
      }
);

export const CharacterProvider = ({ children }) => {
    const { favorites, addToFavorite, deleteToFavorite, isFavorite } = useFavorites();



  return (
    <CharacterContext.Provider
      value={{
        favorites, 
        addToFavorite,
        deleteToFavorite,
        isFavorite,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);
