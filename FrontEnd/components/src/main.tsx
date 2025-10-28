import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App         from './mainPage/App'
import Modes       from './pages/gameSelect/modes'
import Animaux     from './pages/subject/animaux/animaux';
import Objets      from './pages/subject/objets/objets';
import Nourritures from './pages/subject/nourriture/nourritures';
import Transports  from './pages/subject/transports/transports';
import Vetements   from './pages/subject/vetements/vetements';
import APropos     from './pages/aPropos/aPropos';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/modes" element={<Modes />} />
        <Route path="/animaux" element={<Animaux />} />
        <Route path="/objets" element={<Objets/>} />
        <Route path="/nourritures" element={<Nourritures/>} />
        <Route path="/transports" element={<Transports/>} />
        <Route path="/vetements" element={<Vetements/>} />
        <Route path="/aPropos" element={<APropos/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
