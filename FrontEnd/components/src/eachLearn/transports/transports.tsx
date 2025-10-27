import { useNavigate } from 'react-router-dom'
import './transports.css'

export default function Transports() {
    const navigate = useNavigate()

    return (
    <>
    <div>
      <h1>Apprentissage des Transports🚀</h1>
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