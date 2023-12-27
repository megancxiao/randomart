import React from 'react';
import RandomArtwork from './script.js'; // Assuming RandomArtwork component is in a separate file

const App = () => {
  return (
    <div className="App">
      <h1>Random Artwork from the Met Museum</h1>
      <RandomArtwork />
    </div>
  );
};

export default App;
