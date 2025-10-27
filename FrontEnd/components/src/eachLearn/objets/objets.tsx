import { useNavigate } from 'react-router-dom'
import './objets.css'

export default function Objects() {
    const navigate = useNavigate()

    return (
    <>
    <div>
      <h1>Apprentissage des Objets🚀</h1>
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