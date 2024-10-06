import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import MemoryCardGame from './pages/Games/MemoryCardGame.jsx';
import Quiz from './pages/Games/quiz.jsx';
import StoryBoard from './pages/StoryBoard/Story.jsx'; 
import PlanetLayerApp from './pages/PlanetCreation/PlanetLayerApp.jsx';
import PlanetTravel from './pages/ExoExplorer/ExoExplorer.jsx';
import Lander from './pages/ExoWiki/Lander.jsx';
import Lander2 from './pages/ExoWiki/Lander2.jsx'

function App() {
  return (
    <>
    {/* <PlanetLayerApp/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<PlanetLayerApp/>}></Route>
        <Route path="/travel" element={<PlanetTravel/>}></Route>
        <Route path="/memory" element={<MemoryCardGame/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/story" element={<StoryBoard/>}></Route>
        <Route path="/wiki" element={<Lander/>}></Route>
        <Route path="/wiki2" element={<Lander2/>}></Route>
      </Routes>
    </>
  )
}

export default App;
