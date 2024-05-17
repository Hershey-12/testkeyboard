import React, { useEffect, useRef } from 'react';
import './InterestPage.css';
import banner from './JJK-Banner.jpg';
import JJKOverview from './JJKoverview.jpg';
import JJKCharacters from './JJK-Characters.jpg';
import JJKAnime from './JJK-Anime.jpg';
import JJKManga from './JJK-manga.jpg';




function InterestPage() {

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
    <div>
      <header>

        <img src={banner} alt="Jujutsu Kaisen Banner" className="banner-image" />
        <h1>Jujutsu Kaisen</h1>
        <p>Explore the world of Jujutsu Kaisen, a thrilling blend of supernatural action and adventure.</p>
      </header>

      <main>
        <section id="overview">
          <h2>Overview</h2>
          <div className="section-content">
            <img src={JJKOverview} alt="Jujutsu Kaisen Overview" className="section-image" />
            <p>Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. The story follows high school student Yuji Itadori, who joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.</p>
          </div>
        </section>

        <section id="characters">
          <h2>Characters</h2>
          <div className="section-content">
            <img src={JJKCharacters} alt="Jujutsu Kaisen Characters" className="section-image" />
            <ul>
              <li><strong>Yuji Itadori:</strong> The main protagonist who becomes a Jujutsu Sorcerer to save people from Curses.</li>
              <li><strong>Megumi Fushiguro:</strong> A first-year student at the Tokyo Metropolitan Magic Technical College and a skilled Jujutsu Sorcerer.</li>
              <li><strong>Nobara Kugisaki:</strong> A brash and confident first-year student at the same college, known for her fearless attitude.</li>
              <li><strong>Satoru Gojo:</strong> A teacher at the college and one of the most powerful sorcerers, known for his immense strength and playful personality.</li>
            </ul>
          </div>
        </section>

        <section id="anime">
          <h2>Anime</h2>
          <div className="section-content">
            <img src={JJKAnime} alt="Jujutsu Kaisen Anime" className="section-image" />
            <p>The anime adaptation of Jujutsu Kaisen, produced by MAPPA, premiered in October 2020. It has been praised for its animation quality, fight scenes, and faithfulness to the manga. The anime has brought the series to a global audience, further increasing its popularity.</p>
          </div>
        </section>

        <section id="manga">
          <h2>Manga</h2>
          <div className="section-content">
            <img src={JJKManga} alt="Jujutsu Kaisen Manga" className="section-image" />
            <p>The Jujutsu Kaisen manga began serialization in Shueisha's Weekly Shonen Jump in March 2018. It has quickly become one of the most popular series in the magazine, with millions of copies in circulation. The series is known for its dark themes, complex characters, and intricate plot.</p>
          </div>
        </section>

      </main>
    </div>

  );
}

export default InterestPage;
