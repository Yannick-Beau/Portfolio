// == Import npm
import React from 'react';

// == Import
import './project.scss';
import hungrytruck from '../../../assets/img/hungrytruck.svg';

// == Composant
const Home = () => (
  <main className="project">
    <h1 id="project-title">Mes réalisations</h1>
    <ul>
      <li>
        <article className="project-article">
          <img
            className="article-img"
            src={hungrytruck}
            alt="hungrytruck"
          />
          <h2 className="article-title">HungryTruck</h2>
          <p className="project-description">
            HungryTruck est un site permettant aux foods trucks de pouvoir avoir une
            visibilité sur la toile. Ainsi, ces professionnels seront en mesure de partager
            leur position, types de mets proposés et permettre aux utilisateurs de trouver
            les foods trucks à proximité.
          </p>
          <a className="link-project" href="https://hungrytruck.surge.sh/" target="_blank" rel="noreferrer">Voir le projet</a>
          <h3 className="article-tech-title">Technologies utilisées</h3>
          <ul className="tech-list">
            <li>
              <img
                className="techs-icon"
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/d86cbfa3a167b0332b9e21718a4631737b99149a/icons/html5.svg"
                alt="html"
              />
            </li>
            <li>
              <img
                className="techs-icon"
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/d86cbfa3a167b0332b9e21718a4631737b99149a/icons/css3.svg"
                alt="css"
              />
            </li>
            <li>
              <img
                className="techs-icon"
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/d86cbfa3a167b0332b9e21718a4631737b99149a/icons/javascript.svg"
                alt="javascript"
              />
            </li>
            <li>
              <img
                className="techs-icon"
                src="https://e7.pngegg.com/pngimages/779/126/png-clipart-php-php.png"
                alt="php"
              />
            </li>
            <li>
              <img
                className="techs-icon"
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/d86cbfa3a167b0332b9e21718a4631737b99149a/icons/html5.svg"
                alt="mysql"
              />
            </li>
            <li>
              <img
                className="techs-icon"
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/d86cbfa3a167b0332b9e21718a4631737b99149a/icons/github.svg"
                alt="github"
              />
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </main>
);

// == Export
export default Home;
