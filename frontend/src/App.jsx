import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import PlanetLayerApp from './pages/PlanetCreation/PlanetLayerApp.jsx';
import Lander from './pages/ExoWiki/Lander.jsx';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<PlanetLayerApp/>}></Route>
        <Route path="/wiki" element={<Lander/>}></Route>
      </Routes>
    </>
  )
}

export default App;
