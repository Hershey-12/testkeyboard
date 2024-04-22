import React, { useEffect, useRef } from 'react';
import './ReadPage.css';

function ReadPage() {
  const links = [
    { name: 'Jujuts Kaisen', url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen' },
    { name: 'Frieren: Beyond Journey\'s End', url: 'https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end' },
    { name: 'Napping: Benefits and Tips', url: 'https://www.sleepfoundation.org/napping#:~:text=A%20midday%20nap%20can%20enhance,without%20falling%20into%20deep%20sleep.' },
    { name: '14 Restaurants Serving Terrific Thai Food in the Seattle Area', url: 'https://seattle.eater.com/maps/best-thai-food-restaurants-seattle' },
    { name: 'Bobae Coffee & Tea', url: 'https://www.bobaeusa.com/' },
    { name: 'The Apothecary Diaries', url: 'https://myanimelist.net/anime/54492/Kusuriya_no_Hitorigoto' },
    { name: 'Spy x Family', url: 'https://en.wikipedia.org/wiki/Spy_%C3%97_Family_(TV_series)' },
    { name: 'Creating A GitHub Pages site', url: 'https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site' },
    { name: 'React', url: 'https://react.dev/' },
    { name: 'C++ Programming Language', url: 'https://devdocs.io/cpp/' },
  ];

  const linksRef = useRef([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 38 || event.keyCode === 40) {
        event.preventDefault();

        const currentLinkIndex = linksRef.current.findIndex((link) => link === document.activeElement);
        const nextLinkIndex =
          event.keyCode === 38
            ? (currentLinkIndex - 1 + linksRef.current.length) % linksRef.current.length
            : (currentLinkIndex + 1) % linksRef.current.length;

        linksRef.current[nextLinkIndex].focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="readContainer">
      <div className="readlinks">
        <h1>Things To Read</h1>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" ref={(el) => (linksRef.current[index] = el)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReadPage;
