import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Inputname from './components/Inputname'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'
import { useEffect } from 'react'
import pikashu from './assets/img/pikawalk.gif'
import pokeball from './assets/img/pokemon-imagen-animada-0082.gif'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  })

  return (
    <HashRouter>
      {
        isLoading ? (
          <div className='loader'>
           <img src={pokeball} alt="" />
           <h1>Cargando Pokedex...</h1>
          </div>

        ) : (
          <Routes>
            <Route path='/' element={<Inputname/>} />
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexId />} />
          </Routes>

        )
      }
    </HashRouter>
  )
}

export default App
