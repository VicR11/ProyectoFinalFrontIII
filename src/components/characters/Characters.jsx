import { useNavigate } from "react-router-dom";
import { useCharacter } from "../../context/CharacterContext";
import CharacterCard from "../character/CharacterCard";
import styles from "./Characters.module.css";
import { useCharacters } from "../../hooks/useCharacters";

function Characters() {
  const navigate = useNavigate();
  const { characters } = useCharacters();
  const { addToFavorite, deleteToFavorite, isFavorite } = useCharacter();


  return (
    <div>
      <section className={styles["card-container"]}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onCardClick={(id) => navigate(`/CharacterDetailsPage/${id}`)}
            onAddToFavorite={addToFavorite}
            onRemoveFromFavorite={deleteToFavorite}
            isFavorite={isFavorite(character.id)}
          />
        ))}
      </section>
    </div>
  );
}

export default Characters;
