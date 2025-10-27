import { useNavigate } from 'react-router-dom'
import './aPropos.css'

export default function APropos() {
    const navigate = useNavigate()

    return (
    <>
    <div>
      <h1 className='titlepropos'>A propos</h1>
      <p>Motizou est une application créée par Cyril Houppertz,<br/>
      Jeune étudiant en Technologie de l'Informatique direction application web</p>
    </div>

    <button onClick={() => navigate('/')} className='REA'>
        Revenir En Arrière
    </button>
    </>
  )
}