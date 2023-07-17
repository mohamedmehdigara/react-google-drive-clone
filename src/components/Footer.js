// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Suivez notre Blog</a>
        <a href="#">À propos de Google</a>
        <a href="#">Produits Google</a>
        <a href="#">Confidentialité</a>
        <a href="#">Conditions d'utilisation</a>
        <a href="#">Aide</a>
      </div>
      <div className="footer-info">
        <p>Vous êtes prêt ?</p>
        <button className="footer-button">Essayer Drive au travail</button>
        <button className="footer-button">Accéder à Drive</button>
        <div className="footer-links">
          <a href="#">Liens de pied de page</a>
          <a href="#">français</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
