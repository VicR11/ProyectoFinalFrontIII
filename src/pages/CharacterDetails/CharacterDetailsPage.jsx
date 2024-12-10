
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/character/CharacterCard";
import Navbar from "../../components/navbar/Navbar"; 
import styles from './CharacterDetailsPage.module.css'
import { useCharacterDetailsPage } from "../../hooks/useCharacterDetailsPage";

const CharacterDetailsPage = () => {
  const { id } = useParams(); 
  const { character, loading, error } = useCharacterDetailsPage(id); 

 
  if (loading) return <p>Cargando detalles del personaje...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <div className={styles["navbar-container"]}>
    <Navbar />
    </div>
    <div className={styles["card-container"]}>
      {character && <CharacterCard character={character} />} {}
    </div>
    </>
  );
};

export default CharacterDetailsPage;


