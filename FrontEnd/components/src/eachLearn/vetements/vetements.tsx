import { useNavigate } from 'react-router-dom'
import './vetements.css'

export default function Vetements() {
    const navigate = useNavigate()

    return (
    <>
    <div>
      <h1>Apprentissage des Vetements🚀</h1>
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