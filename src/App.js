import React from 'react';
import './styles/App.css';
import RandomArtwork from './components/ArtCard.js'; // Assuming RandomArtwork component is in a separate file

const App = () => {
  return (
    <div className="App">
      <h1>Random Artwork from the Met Museum</h1>
      <RandomArtwork />
    </div>
  );
};

export default App;
