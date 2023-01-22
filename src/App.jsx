import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Inputname from './components/Inputname'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'

import pikashu from './assets/img/pikawalk.gif'
import pokeball from './assets/img/pokemon-imagen-animada-0082.gif'
import ProtectedRoutes from './components/ProtectedRoutes'



function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [switchMode, setSwitchMode] = useState(false);
  const [darkmode, setDarkmode] = useState(false)

  const load = () => {
    setTimeout(() => setIsLoading(false), 1000);

  }
  load();

  const switchOn = () => {
    setSwitchMode(!switchMode);
    setDarkmode(!darkmode);
  };
  let classDark = "";
  if (switchMode == true) {
    classDark = "active";
  }

  return (
    <div className=
      {
        `container-app ${darkmode ? 'dark' : 'ligth'}`
      }

    >

      <HashRouter>
        <header style={{ display: isLoading ? 'none' : 'block' }}>
          <button
            onClick={switchOn}
            className={`switch ${classDark}`}
            id="swith">
            <span>
              <i className="bx bx-sun bx-sm"></i>
            </span>
            <span>
              <i className="bx bx-moon bx-sm"></i>
            </span>
          </button>
        </header>

        {
          isLoading ? (
            <div className='loader'>
              <img src={pokeball} alt="" />
              <h1 className='animate__animated animate__bounce animate__heartBeat'>Cargando Pokedex...</h1>

            </div>


          ) : (


            <Routes>

              <Route path='/' element={<Inputname />} />
              <Route element={<ProtectedRoutes />}>
                <Route path='/pokedex' element={<Pokedex />} />
                <Route path='/pokedex/:id' element={<PokedexId />} />

              </Route>
            </Routes>

          )
        }

      </HashRouter>
    </div>
  )
}

export default App
