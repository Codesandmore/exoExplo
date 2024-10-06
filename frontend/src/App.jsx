import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import MemoryCardGame from './pages/Games/MemoryCardGame.jsx';
import Quiz from './pages/Games/Quiz.jsx';
import StoryBoard from './pages/StoryBoard/Story.jsx';
import PlanetLayerApp from './pages/PlanetCreation/PlanetLayerApp.jsx';
import PlanetTravel from './pages/ExoExplorer/ExoExplorer.jsx';
import Lander from './pages/ExoWiki/Lander.jsx';
import Lander2 from './pages/ExoWiki/Lander2.jsx';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<PlanetLayerApp />} />
          <Route path="/travel" element={<PlanetTravel />} />
          <Route path="/memory" element={<MemoryCardGame />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/story" element={<StoryBoard />} />
          <Route path="/wiki" element={<Lander />} />
          <Route path="/wiki2" element={<Lander2 />} />
        </Routes>
    </Router>
  );
}

export default App;
