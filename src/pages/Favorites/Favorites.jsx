
import Navbar from "../../components/navbar/Navbar";
import { useCharacter } from "../../context/CharacterContext";
import CharacterCard from "../../components/character/CharacterCard";
import { useState, useEffect } from "react";
import styles from "./Favorites.module.css"

const Favorites = () => {
  const { favorites, deleteToFavorite } = useCharacter();

  return (
    <main>
      <Navbar />
      <h1>Favorites</h1>
      {favorites?.length === 0 ? (
        <p>No favorite characters</p>
      ) : (
       
        <section className={styles["container-section"]}>
          {favorites.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onRemoveFromFavorite={deleteToFavorite}
              isFavorite={true} 
              buttonLabel="Remove from Favorites"
            />
          ))}
        </section>
       
      )}
    </main>
  );
};

export default Favorites;
