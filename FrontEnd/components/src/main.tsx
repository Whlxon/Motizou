import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App         from './mainPage/App'
import Modes       from './pages/gameSelect/modes'
import Game    from './pages/subject/game';
import APropos     from './pages/aPropos/aPropos';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/modes" element={<Modes />} />
        <Route path="/game" element={<Game />} />
        <Route path="/aPropos" element={<APropos/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
