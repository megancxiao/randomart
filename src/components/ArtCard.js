import React, { useState, useEffect } from 'react';
import "../styles/styles.css"

const RandomArtwork = () => {
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    async function fetchRandomArtwork() {
      try {
        let artworkData = null;
        while (!artworkData || !artworkData.primaryImageSmall) {
          const response = await fetch(
            'https://collectionapi.metmuseum.org/public/collection/v1/objects'
          );
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          const randomIndex = Math.floor(Math.random() * data.objectIDs.length);
          const randomObjectID = data.objectIDs[randomIndex];
          const artworkResponse = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectID}`
          );
          if (!artworkResponse.ok) {
            throw new Error('Failed to fetch artwork');
          }
          artworkData = await artworkResponse.json();
        }
        setArtwork(artworkData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRandomArtwork();
  }, []);

  return (
    <div className="artwork-card">
      {artwork ? (
        <>
          <a
            href={`https://www.metmuseum.org/art/collection/search/${artwork.objectID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={artwork.primaryImageSmall} alt={artwork.title} />
          </a>
          <h2>{artwork.title}</h2>
          
          <p>{artwork.artistDisplayName}</p>
          {/* You can display more information about the artwork */}
        </>
      ) : (
        <p>Art is loading... please wait a sec :)</p>
      )}
    </div>
  );
};

export default RandomArtwork;
