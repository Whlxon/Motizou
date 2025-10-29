import { useNavigate } from 'react-router-dom'
import { gameService } from '../../utils/gameLogique'
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
        <button onClick={() => {navigate('/game'); gameService.setType(0)}} className='elephant'>
        </button>
        <br/>
        <button onClick={() => {navigate('/game'); gameService.setType(1)}} className="objet">
        </button>
        <br/>
        <button onClick={() => {navigate('/game'); gameService.setType(2)}} className="nourriture">
        </button>
        <br/>
        <button onClick={() => {navigate('/game'); gameService.setType(3)}} className="transport">
        </button>
        <br/>
        <button onClick={() => {navigate('/game'); gameService.setType(4)}} className="vetement">
        </button>
    </div>
    <button onClick={() => navigate('/')} className='REA'>
        Revenir En Arrière
    </button>
    </>
  )
}