import React from 'react';

const Timeline = () => {
  return (
    <div className="timeline-container" style={containerStyle} id="lander2-page">
      <h1 style={headingStyle}>A Journey Through the Discovery of Exoplanets</h1>
      <div className="timeline">
        <div className="timeline-event left" style={{ ...eventStyle, justifyContent: 'flex-start' }}>
          <div style={dateStyle}>1992</div>
          <div style={contentStyle}>
            <h3>The Beginning</h3>
            <p>
              Our story begins in 1992 when scientists made the first confirmed discovery of exoplanets around a pulsar named PSR B1257+12. These planets, Draugr (the least massive) and its companions, were unlike anything we had ever known.
            </p>
          </div>
        </div>

        <div className="timeline-event right" style={{ ...eventStyle, justifyContent: 'flex-end' }}>
          <div style={dateStyle}>1995</div>
          <div style={contentStyle}>
            <h3>The First “Normal” Exoplanet</h3>
            <p>
              In 1995, Michel Mayor and Didier Queloz discovered 51 Pegasi b, the first exoplanet orbiting a Sun-like star. This “hot Jupiter” sparked a wave of excitement, proving planets exist beyond our solar system.
            </p>
          </div>
        </div>

        <div className="timeline-event left" style={{ ...eventStyle, justifyContent: 'flex-start' }}>
          <div style={dateStyle}>2009</div>
          <div style={contentStyle}>
            <h3>The Kepler Revolution</h3>
            <p>
              The Kepler Space Telescope, launched in 2009, aimed to find Earth-sized planets in habitable zones. It revealed thousands of exoplanets, revolutionizing our understanding of planetary systems.
            </p>
          </div>
        </div>

        <div className="timeline-event right" style={{ ...eventStyle, justifyContent: 'flex-end' }}>
          <div style={dateStyle}>2016</div>
          <div style={contentStyle}>
            <h3>Proxima Centauri b</h3>
            <p>
              In 2016, the discovery of Proxima Centauri b, an Earth-sized exoplanet in the habitable zone of our closest star, opened new possibilities in the search for extraterrestrial life.
            </p>
          </div>
        </div>

        <div className="timeline-event left" style={{ ...eventStyle, justifyContent: 'flex-start' }}>
          <div style={dateStyle}>2017</div>
          <div style={contentStyle}>
            <h3>The TRAPPIST-1 System</h3>
            <p>
              In 2017, astronomers discovered seven Earth-sized planets in the TRAPPIST-1 system, with three in the habitable zone, sparking curiosity about the potential for alien life.
            </p>
          </div>
        </div>

        <div className="timeline-event right" style={{ ...eventStyle, justifyContent: 'flex-end' }}>
          <div style={dateStyle}>HR 2562 b</div>
          <div style={contentStyle}>
            <h3>The Most Massive Exoplanet</h3>
            <p>
              HR 2562 b is one of the most massive exoplanets ever discovered, about 30 times the mass of Jupiter, leading to debates about whether it’s a planet or a brown dwarf.
            </p>
          </div>
        </div>

        <div className="timeline-event left" style={{ ...eventStyle, justifyContent: 'flex-start' }}>
          <div style={dateStyle}>The Future</div>
          <div style={contentStyle}>
            <h3>The Ongoing Search</h3>
            <p>
              With upcoming missions like the James Webb Space Telescope, the search for exoplanets continues, offering new opportunities to explore the atmospheres of distant worlds for signs of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for layout
const containerStyle = { 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '2rem',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '3rem',
};

const eventStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3rem',
  width: '100%', // Take full width of the container
  position: 'relative',
};

const dateStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  width: '100px',
  textAlign: 'center',
};

const contentStyle = {
  background: 'linear-gradient(135deg, #007BFF, #00C9FF)', // Blue gradient
  color: 'white', // White text
  padding: '1.5rem',
  borderRadius: '10px',
  width: '500px',
  boxShadow: '0 4px 10px rgba(0, 184, 255, 0.8)', // Glowing effect
  textAlign: 'left',
};

export default Timeline;




