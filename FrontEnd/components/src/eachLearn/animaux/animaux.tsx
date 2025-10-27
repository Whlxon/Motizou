import { useNavigate } from 'react-router-dom'
import './animaux.css'

export default function Animals() {
    const navigate = useNavigate()

    return (
    <>
      <div>
        <h1>Apprentissage des Animaux🚀</h1>
        <p>Ici commencera ton parcours dans Motizou.</p>
        
      </div>

      <div className='learn'>

        <button>

        </button>
        <button>

        </button>
        <button>

        </button>
      </div>
      
      

      <button onClick={() => navigate('/modes')} className='REA'>
          Revenir En Arrière
      </button>
    </>
  )
}