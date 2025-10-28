import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import type { gameObject } from '../../../model/words';
import './objets.css'


export default function Objects() {
    const navigate = useNavigate();
    
        const [bonObjet, setBonObjets] = useState(false);
        const [hasClicked, setHasClicked] = useState(false);
        const [objets, setObjets] = useState<gameObject[]>([]);
        const [objetCorrect, setObjetCorrect] = useState<gameObject | null>(null);
    
        const fetchObjets = async () => {
          try {
            const res = await fetch("http://localhost:3000/api/objets");
            const data = await res.json();
            console.log("<Infos> BackEnd Data Recieve Successfully !")
            setObjets(data);
    
            const correct = data.find((a: gameObject) => a.select);
            setObjetCorrect(correct || null);
          } catch (err) {
            console.error("Erreur lors du fetch :", err);
          }
        };
    
        // Récupère la liste de 3 animaux depuis ton backend
        useEffect(() => {
            fetchObjets();
        }, []);
    
    
        const handleObjetClick = (objet: gameObject) => {
          setHasClicked(true)
          
    
          if (objet.select) {
            console.log(`<HandleClickInfos> Button cliked: ${objet.nom}; And it's Right`);
            setBonObjets(true)
          } else {
            console.log(`<HandleClickInfos> Button cliked: ${objet.nom}; And it's wrong`);
            setBonObjets(false)
          }
        };  
    
        const handleNext = () => {
          fetchObjets(); // recharge 3 nouveaux animaux
          setHasClicked(false);
          setBonObjets(false);
        };

    return (
    <>
    <div className='title'>
      <h1>Apprentissage des Objets</h1>
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

        {bonObjet && (
          <h2>Bravo !</h2>
        )}

        {hasClicked && !bonObjet && (
          <h2>
            Oh non, dommage...
          </h2>
        )}

        {objets.map((objet, index) => (
          <button key={index} className='choice' onClick={() => handleObjetClick(objet)}>
            {objet.nom}
          </button>
        ))}

        <br/>
        <button onClick={handleNext} className='next'>
          next
        </button>
    </div>

    <button onClick={() => navigate('/modes')} className='REA'>
        Revenir En Arrière
    </button>
    </>
  )
}