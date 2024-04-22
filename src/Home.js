import { useState } from 'react';
import logo from './Harshitha.jpeg';
//import './App.css';

function Home() {
  const [interests, setInterests] = useState([
    "Anime",
    "Gym",
    "Napping",
    "Thai Food"
  ]);

  const reorderList = () => {
    // Create a copy of the interests array
    const shuffledInterests = [...interests];
    
    // Shuffle the array
    for (let i = shuffledInterests.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledInterests[i], shuffledInterests[j]] = [shuffledInterests[j], shuffledInterests[i]];
    }
    
    // Update the state with shuffled interests
    setInterests(shuffledInterests);
  };

  return (
    <div className="App">
      <h1> Welcome to Harshitha Komaravelli's CSS 480 webpage</h1>
      <p>I am a third year at the Univeristy of Washington Bothell 
        majoring in Computer Science and Software Engineering</p>
        <img src ={logo} alt = "logo" className = "logo" />
      <div className = "d2">
        <h2>Some of my interests</h2>
        <ul className="interests">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
        <button className="button" onClick={reorderList}>Reorder List</button>      

      </div>
    </div>
  );
}

export default Home;