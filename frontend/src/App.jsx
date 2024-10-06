import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import PlanetLayerApp from './pages/PlanetCreation/PlanetLayerApp.jsx'

function App() {
  return (
    <>
    {/* <PlanetLayerApp/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/create" element={<PlanetLayerApp/>}></Route> */}
      </Routes>
    </>
  )
}

export default App;
