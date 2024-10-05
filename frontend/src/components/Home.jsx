import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import ExoWiki from './ExoWiki'
import PlanetTravel from './PlanetTravel'
import StoryBoard from './StoryBoard'
import CreatePlanet from './CreatePlanet'
import Games from './Games'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <PlanetTravel/>
        <ExoWiki/>
        <StoryBoard/>
        <CreatePlanet/>
        <Games/>
        <Footer/>
    </div>
  )
}

export default Home