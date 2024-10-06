import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import MemoryCardGame from './pages/Games/MemoryCardGame.jsx';
import Quiz from './pages/Games/quiz.jsx';
import ExoWiki from './pages/ExoWiki/Lander.jsx';
import ExoWiki2 from './pages/ExoWiki/Lander2.jsx';
// import PlanetLayerApp from './pages/PlanetCreation/PlanetLayerApp.jsx';

function App() {
  return (
    <>
    {/* <PlanetLayerApp/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/create" element={<PlanetLayerApp/>}></Route> */}
        <Route path="/memory" element={<MemoryCardGame/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/wiki" element={<ExoWiki/>}></Route>
        <Route path="/wiki2" element={<ExoWiki2/>}></Route>

      </Routes>
    </>
  )
}

export default App;
