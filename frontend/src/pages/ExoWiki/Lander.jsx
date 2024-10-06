import React from 'react';
import { Link } from 'react-router-dom';

const Lander = () => {
  return (
    <div className="lander-container" style={containerStyle} id="lander-page">
      <h1 style={headingStyle}>EXOPLANET</h1>
      <div className="content-box" style={boxStyle}>
        <p style={textStyle}>
          Have you ever looked up at the night sky and wondered what else is out there? Beyond the familiar planets of our solar system lies a universe teeming with mystery—home to countless exoplanets, or planets that orbit stars other than our Sun. Since the early 1990s, when the first exoplanet was confirmed, scientists have been on an exhilarating quest to explore these distant worlds. What do they look like? Could they harbor life? Let's embark on a journey to discover the wonders of exoplanets!
        </p>
        <p style={textStyle}>
          An exoplanet is any planet beyond our solar system. It is also called an extrasolar planet. Most of them orbit other stars, but some free-floating exoplanets, called rogue planets, are untethered to any star. We've confirmed more than 5,600 exoplanets out of the billions we believe exist. Most of the exoplanets discovered so far are in a relatively small region of our galaxy, the Milky Way. Even the closest known exoplanet to Earth, Proxima Centauri b, is still about 4 light-years away. We know there are more planets than stars in the galaxy. The James Webb Space Telescope (JWST) is expected to discover more exoplanets, and to give more insight into their traits, such as their composition, environmental conditions, and potential for life.
        </p>
        <p style={textStyle}>
          There are many methods of detecting exoplanets: Transit photometry and Doppler spectroscopy have found the most, but these methods suffer from clear observational bias favoring the detection of planets near the star; thus, 85% of the exoplanets detected are inside the tidal locking zone. The least massive known exoplanet is Draugr (also called PSR B1257+12 A or PSR B1257+12 b), which is about twice the mass of the Moon. On the other end of the scale, the most massive exoplanet listed on the NASA Exoplanet Archive is HR 2562 b, which is around 30 times the mass of Jupiter. However, because of its size, some scientists consider HR 2562 b too large to be a planet and think it might actually be a brown dwarf instead.
        </p>
      </div>
      <Link to="/wiki2">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center hover:bg-gray-200 transition duration-300" style={buttonStyle}>
          Learn <span className="ml-2">→</span>
        </button>
      </Link>
    </div>
  );
};

// Styles for layout

const containerStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  color: 'white',
  position: 'relative', // Make the container a relative parent for absolute positioning
};

const headingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '-1rem', // Positioning heading just on top of the box
  textShadow: '0 0 10px rgba(255, 255, 255, 0.7)', // Adding glow effect
};

const boxStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent box
  padding: '1.25rem',
  borderRadius: '15px', // Rounded borders
  maxWidth: '800px',
  width: '100%',
  textAlign: 'justify',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Optional: Add some shadow for depth
  marginTop: '1rem', // Ensures the box is below the heading
};

const textStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
};

const buttonStyle = {
  position: 'absolute',
  top: '1rem', // Positioning the button from the top
  right: '1rem', // Positioning the button from the right
  backgroundColor: '#ffffff',
  color: '#000000',
  padding: '0.75rem 2rem',
  border: 'none',
  borderRadius: '30px',
  fontSize: '1rem',
  cursor: 'pointer',
  zIndex: 10, // Ensures the button stays on top
};

export default Lander;
