import { useNavigate } from 'react-router-dom'
import './transports.css'

export default function Transports() {
    const navigate = useNavigate()

    return (
    <>
    <div className='title'>
      <h1>Apprentissage des Transports</h1>
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