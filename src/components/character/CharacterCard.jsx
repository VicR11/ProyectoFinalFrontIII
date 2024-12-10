
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({
  character,
  onCardClick,
  onAddToFavorite,
  onRemoveFromFavorite,
  isFavorite,
}) => {

    const location = useLocation(); 
    const isInDetailsPage = location.pathname.includes("/CharacterDetailsPage");

  return (
    <article
      className={styles["card-container"]}
      onClick={() => onCardClick?.(character.id)}
    >
      <img src={character.image} alt={character.name} />
      <div>
        <h2>
          {character.name} {isFavorite && "⭐"}
        </h2>
        <p>{`${character.race} - ${character.gender}`}</p>
        <div>
          <div>
            <h3>Base KI:</h3>
            <p>{character.ki}</p>
          </div>
          <div>
            <h3>Total KI:</h3>
            <p>{character.maxKi}</p>
          </div>
          <div>
            <h3>Afiliation:</h3>
            <p>{character.affiliation}</p>
          </div>
        </div>
        { !isInDetailsPage && (
        
        isFavorite ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFromFavorite(character.id);
            }}
            className={styles.link}
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToFavorite(character);
            }}
            className={styles.link}
          >
            Add to Favorites
          </button>
        ))}
        
      </div>
    </article>
  );
};

export default CharacterCard;

