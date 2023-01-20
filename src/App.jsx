import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes} from 'react-router-dom'
import Inputname from './components/Inputname'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'

import pikashu from './assets/img/pikawalk.gif'
import pokeball from './assets/img/pokemon-imagen-animada-0082.gif'



function App() {

  const [isLoading, setIsLoading] = useState(true);
  const load =()=>{
    setTimeout(() => setIsLoading(false), 1000);
    
  }
  load();
  
  return (
    <HashRouter>
      {
        isLoading ? (
          <div className='loader'>
            <img src={pokeball} alt="" />
            <h1 className='animate__animated animate__bounce animate__heartBeat'>Cargando Pokedex...</h1>
          </div>

        ) : (
          <Routes>
            <Route path='/'element={<Inputname />} />
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexId />} />
          </Routes>

        )
      }
    </HashRouter>
  )
}

export default App
