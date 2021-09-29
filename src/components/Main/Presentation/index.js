// == Import npm
import React from 'react';

// == Import
import './presentation.scss';
import photoYB from '../../../assets/img/photo.png';

// == Composant
const Home = () => (
  <main className="presentation">
    <h1 className="presentation-title">Présentation</h1>
    <div className="presentation-content">
      <img
        className="photo"
        src={photoYB}
        alt="Yannick Beau"
      />
      <p className="content-paragraph">Ancien conseiller de clientèle, après 7ans de commerce j'ai décidé de me reconvertir et de devenir un développeur web.</p>
      <p className="content-paragraph">J'ai suivi une formation de 5mois avec l'école O'Clock. J'ai pu apprendre le coté back avec PHP et le coté front avec JS/React.</p>
      <p className="content-paragraph">Je suis maintenant à la recherche d'une alternance concepteur développeur d'application, mais je reste ouvert au offre de CDI.</p>
      <p className="content-paragraph">En parallèle je continu à me former, je compte apprendre le framework symfony car le coté back m'interesse beaucoup. Je prépare également mon dossier pour le passage du titre professionnel développeur web et la certification opquast.</p>
    </div>
    <h2>Compétence</h2>
    <div className="softskills">
      <div className="mindset">
        <h3>Soft skills</h3>
        <ul className="mindset-list">
          <li>Polyvalent</li>
          <li>Autonome</li>
          <li>Analyser pour solutionner</li>
          <li>Travailler en équipe</li>
          <li>Echanger et Partager</li>
          <li>S'adapter et soif d'apprendre</li>
        </ul>
      </div>
      <div className="techs">
        <h3>Programmation<br /> &<br /> Technologies</h3>
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
      </div>
    </div>
  </main>
);

// == Export
export default Home;
