// App.js

import React from 'react';
import FileList from './components/FileList';
import FileUploader from './components/FileUploader';
import Footer from './components/Footer';
import Main from './components/Main';
import "./App.css";

const files = [
  { id: 1, name: 'File 1', thumbnail: 'file1.jpg' },
  { id: 2, name: 'File 2', thumbnail: 'file2.jpg' },
  { id: 3, name: 'File 3', thumbnail: 'file3.jpg' },
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="header-logo">Aperçu</div>
          <div className="header-link">Fonctionnalités</div>
          <div className="header-link">Clients</div>
          <div className="header-link">Tarifs</div>
          <div className="header-link">Télécharger</div>
        </div>
        <div className="header-right">
          <div className="header-dropdown">
            <div className="header-dropdown-button">Plus d'outils</div>
            <div className="header-dropdown-content">
              <div className="header-dropdown-option">Option 1</div>
              <div className="header-dropdown-option">Option 2</div>
              <div className="header-dropdown-option">Option 3</div>
            </div>
          </div>
          <div className="header-link">Connexion</div>
          <div className="header-buttons">
            <button className="header-button">Accéder à Drive</button>
            <button className="header-button">Essayer Drive au travail</button>
          </div>
        </div>
      </header>
      <h1>Google Drive Clone</h1>
      <Main/>
      <FileUploader />
      <FileList files={files} />
      <Footer/>
    </div>
  );
};

export default App;
