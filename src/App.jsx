
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeInfoPage from './pages/PokeInfoPage'
import { useSelector } from 'react-redux'
import ProtecetedRoutes from './pages/ProtecetedRoutes'
import 'bulma/css/bulma.min.css'
function App() {
  
  return (
    <>
      <div>
       <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route element={<ProtecetedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokedex/:id' element={<PokeInfoPage/>}/>
          </Route>
          
       </Routes>
      </div>
      
    </>
  )
}

export default App
