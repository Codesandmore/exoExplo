import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
<<<<<<< HEAD
/* import PlanetLayerApp from './pages/PlanetCreation/PlanetLayerApp.jsx' */
=======
import MemoryCardGame from './pages/Games/MemoryCardGame.jsx';
import Quiz from './pages/Games/quiz.jsx';
// import PlanetLayerApp from './pages/PlanetCreation/PlanetLayerApp.jsx';
>>>>>>> 527cb205b8094a33645568d97758d85e09a3b164

function App() {
  return (
    <>
    {/* <PlanetLayerApp/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/create" element={<PlanetLayerApp/>}></Route> */}
        <Route path="/memory" element={<MemoryCardGame/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
      </Routes>
    </>
  )
}

export default App;
