// == Import npm
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

// == Import
import './contact.scss';

// == Composant
const Home = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('MyPortfolio', 'template_58ghjsn', e.target, 'user_b1iKQhv18vT3UElQ5WnW6')
      .then((response) => {
      }, (error) => {
      });
    e.target.reset();
  }
  return (
    <main className="contact">
      <h2 id="contact-title">Contactez moi</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail(e);
        }}
      >
        <p>Vous souhaitez m'adresser un message ?</p>
        <label htmlFor="mail">
          Veuillez renseigner votre adresse mail :
          <input
            id="contact-mail"
            type="text"
            name="mail"
            placeholder="exemple : john@deuf.fr"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="message">
          Quel message souhaitez vous m'adresser ?
          <textarea
            id="contact-textarea"
            name="message"
            type="text"
            placeholder="Ecrivez votre message ici"
            minLength="20"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </label>
        <div id="contact-form-submit">
          <button id="contact-form--button" type="submit">
            Envoyer mon message
          </button>
          <Link to="/" className="button-Link">
            <button type="button" id="button-linkto">
              Retourner au menu principal
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
};

// == Export
export default Home;
