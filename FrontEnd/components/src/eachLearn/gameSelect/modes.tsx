import { useNavigate } from 'react-router-dom'
import './page.css'

export default function Modes() {
    const navigate = useNavigate()

    return (
    <>
    <div>
      <h1>Bienvenue dans ton aventure !</h1>
      <h3>Ici commencera ton parcours dans Motizou.</h3>
    </div>
    <div className='listButton'>
        <button onClick={() => navigate('/animaux')} className='elephant'>
        </button>
        <br/>
        <button onClick={() => navigate('/objets')} className="objet">
        </button>
        <br/>
        <button onClick={() => navigate('/nourritures')} className="nourriture">
        </button>
        <br/>
        <button onClick={() => navigate('/transports')} className="transport">
        </button>
        <br/>
        <button onClick={() => navigate('/vetements')} className="vetement">
        </button>
    </div>
    <button onClick={() => navigate('/')} className='REA'>
        Revenir En Arrière
    </button>
    </>
  )
}