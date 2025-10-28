import { useNavigate } from 'react-router-dom'
import './nourriture.css'

export default function Nourritures() {
    const navigate = useNavigate()

    return (
    <>
    <div className='title'>
      <h1>Apprentissage de la Nourriture</h1>
      <p>Ici commencera ton parcours dans Motizou.</p>
    </div>
    <div className='learn'>
    </div>

    <button onClick={() => navigate('/modes')} className='REA'>
        Revenir En Arrière
    </button>
    </>
  )
}