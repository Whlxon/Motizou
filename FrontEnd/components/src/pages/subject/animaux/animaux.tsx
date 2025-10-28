import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import type { gameObject } from '../../../model/words';
import './animaux.css'

export default function Animals() {
    const navigate = useNavigate();

    const [bonAnimal, setBonAnimal] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);
    const [animals, setAnimals] = useState<gameObject[]>([]);
    const [animalCorrect, setAnimalCorrect] = useState<gameObject | null>(null);

    const fetchAnimals = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/animals");
        const data = await res.json();
        console.log("<Infos> BackEnd Data Recieve Successfully !")
        setAnimals(data);

        const correct = data.find((a: gameObject) => a.select);
        setAnimalCorrect(correct || null);
      } catch (err) {
        console.error("Erreur lors du fetch :", err);
      }
    };

    // Récupère la liste de 3 animaux depuis ton backend
    useEffect(() => {
        fetchAnimals();
    }, []);


    const handleAnimalClick = (animal: gameObject) => {
      setHasClicked(true)
      

      if (animal.select) {
        console.log(`<HandleClickInfos> Button cliked: ${animal.nom}; And it's Right`);
        setBonAnimal(true)
      } else {
        console.log(`<HandleClickInfos> Button cliked: ${animal.nom}; And it's wrong`);
        setBonAnimal(false)
      }
    };  

    const handleNext = () => {
      fetchAnimals(); // recharge 3 nouveaux animaux
      setHasClicked(false);
      setBonAnimal(false);
    };


    return (
    <>
      <div className='title'>
        <h1>Apprentissage des Animaux</h1>
        <h3>Ici commencera ton parcours dans Motizou.</h3>
        
      </div>

      <div className='learn'>
        <div className='menu'>
          <button className='menuButton'>
            Niveau 1
          </button>
          <button className='menuButton'>
            Niveau 2
          </button>
          <button className='menuButton'>
            Niveau 3
          </button>
        </div>

        <h1 className="name">
          {animalCorrect?.nom}
        </h1>

        

        {bonAnimal && (
          <h2>Bravo !</h2>
        )}

        {hasClicked && !bonAnimal && (
          <h2>
            Oh non, dommage...
          </h2>
        )}

        {animals.map((animal, index) => (
          <button key={index} className='choice' onClick={() => handleAnimalClick(animal)}>
            {animal.nom}
          </button>
        ))}

        <br/>
        <button onClick={handleNext} className='next'>
          next
        </button>
      </div>
      
     

      <br/>
      <button onClick={() => navigate('/modes')} className='REA'>
          Revenir En Arrière
      </button>
    </>
  )
}