import { useNavigate } from 'react-router-dom'
import './App.css'


export default function App() {

  const navigate = useNavigate()

  return (
    <>
      <div className='app-background'>
        <h1>
          Motizou Toujours avec vous ^^
        </h1>
        <div>
          Motizou l'application où on apprend à son rythme
        </div>
        
        <button className="commencer" onClick={() => navigate('/modes')}>
        </button>
        
        <br/>
        <button onClick={() => navigate('aPropos')} className="aPropos">
          A propos
        </button>
      </div>
    </>
  )
}
