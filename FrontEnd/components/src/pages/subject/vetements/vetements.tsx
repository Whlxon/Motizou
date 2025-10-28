import { useNavigate } from 'react-router-dom'
import './vetements.css'

export default function Vetements() {
    const navigate = useNavigate()

    return (
    <>
    <div className='title'>
      <h1>Apprentissage des Vetements</h1>
      <h3>Ici commencera ton parcours dans Motizou.</h3>
    </div>
    
    <div className='learn'>
    </div>

    <button onClick={() => navigate('/modes')} className='REA'>
        Revenir En Arrière
    </button>
    </>
  )
}