// Main.js

import React from 'react';

const Main = () => {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Un accès simple et sécurisé à votre contenu</h2>
          <p className="hero-description">Stockez vos fichiers et dossiers, partagez-les avec vos collaborateurs, et travaillez dessus depuis votre appareil mobile, tablette ou ordinateur</p>
          <div className="hero-buttons">
            <button className="hero-button">Essayer Drive au travail</button>
            <button className="hero-button">Accéder à Drive</button>
          </div>
          <p className="hero-account">Vous n'avez pas de compte ? <a href="#">S'inscrire sans frais</a></p>
        </div>
        <div className="hero-image">
          <img src="drive-hero.jpg" alt="Google Drive Hero" />
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h3 className="feature-title">Découvrir les avantages de Google Drive</h3>
          <ul className="feature-list">
            <li>Protections intégrées contre les logiciels malveillants, le spam et les rançongiciels</li>
            <li>Drive peut vous donner accès à vos fichiers de façon chiffrée et sécurisée. Les fichiers partagés avec vous peuvent être analysés de façon proactive, puis supprimés en cas de détection de logiciels malveillants, de spam, de rançongiciels ou d'hameçonnage. En outre, Drive est cloud natif, ce qui élimine le recours aux fichiers locaux et réduit les risques pour vos appareils.</li>
            <li>Contenu Drive sécurisé</li>
            <li>Applications de collaboration qui mettent l'accent sur l'humain pour optimiser le travail d'équipe</li>
            <li>Drive s'intègre avec Docs, Sheets et Slides, des applications de collaboration cloud natives qui permettent à votre équipe de créer des contenus et de collaborer plus efficacement en temps réel.</li>
            <li>Optimisation Drive</li>
            <li>Intégration avec les outils et applications déjà utilisés par votre équipe</li>
            <li>Drive s'intègre avec la technologie existante et vient compléter les fonctionnalités déjà employées par votre équipe. Collaborez sur des fichiers Microsoft Office sans avoir à convertir les formats de fichier, et modifiez et stockez plus de 100 autres types de fichiers (PDF, fichiers de CAO, images, etc.).</li>
            <li>Intégration des outils Drive</li>
            <li>L'IA et la technologie de recherche de Google optimisent la productivité de votre équipe</li>
            <li>Les puissantes fonctionnalités de recherche de Google sont intégrées dans Drive et garantissent vitesse, fiabilité et collaboration. D'autres fonctionnalités, telles que les chips de recherche de Drive, réduisent le temps consacré aux recherches en affichant rapidement des contenus plus pertinents.</li>
            <li>Recherche Drive</li>
            <li>Des milliers d'équipes utilisent déjà Drive et révolutionnent les méthodes de travail</li>
            <li>Broadcom Freedom Sanmina Whirlpool</li>
            <li>Drive s'intègre avec les outils déjà utilisés par votre équipe</li>
            <li>Adobe Atlassian Autodesk DocuSign Salesforce Slack</li>
          </ul>
        </div>
        <div className="plans">
          <h3 className="plans-title">Trouvez le forfait qui vous convient</h3>
          <p className="plans-description">Google Drive est intégré à Google Workspace</p>
          <div className="plan">
            <div className="plan-details">
              <div className="plan-icon">Icône Docs</div>
              <div className="plan-name">Personal (sans frais)</div>
              <div className="plan-price">Accéder à Drive</div>
            </div>
            <div className="plan-features">
              <ul className="plan-feature-list">
                <li>Docs</li>
                <li>Sheets</li>
                <li>Slides</li>
                <li>Forms</li>
                <li>Keep</li>
                <li>Sites</li>
                <li>Drive</li>
                <li>Gmail</li>
                <li>Meet</li>
                <li>Agenda</li>
                <li>Chat</li>
              </ul>
            </div>
            <button className="plan-button">Accéder à Drive</button>
          </div>
          <div className="plan">
            <div className="plan-details">
              <div className="plan-icon">Icône Drive</div>
              <div className="plan-name">Business Standard</div>
              <div className="plan-price">11,50 € EUR par utilisateur et par mois (avec un engagement d'un an)</div>
            </div>
            <div className="plan-features">
              <ul className="plan-feature-list">
                <li>Docs, Sheets, Slides, Forms</li>
                <li>Drive Stockage cloud sécurisé</li>
                <li>15 Go par utilisateur</li>
                <li>2 To par utilisateur</li>
                <li>Partage avec l'audience cible</li>
                <li>Drive partagés pour votre équipe</li>
                <li>Gmail Adresse e-mail sécurisée</li>
                <li>Adresse e-mail professionnelle personnalisée</li>
                <li>Meet Téléconférence et visioconférence</li>
                <li>100 participants</li>
                <li>Enregistrements des réunions sauvegardés sur Drive</li>
                <li>Administrations de sécurité</li>
                <li>Console d'administration Administration centralisée</li>
                <li>Règles de sécurité basées sur les groupes</li>
                <li>Service client Libre-service en ligne et forums communautaires</li>
                <li>Assistance en ligne 24h/24, 7j/7 et forums communautaires</li>
              </ul>
            </div>
            <button className="plan-button">Commencer</button>
          </div>
          <p className="more-plans">Voir d'autres forfaits</p>
        </div>
        <div className="google-one">
          <p className="google-one-info">Votre compte personnel manque d'espace de stockage ?</p>
          <p className="google-one-link"><a href="#">Google One</a></p>
          <p className="google-one-description">Google One est un abonnement payant qui vous permet d'augmenter l'espace de stockage partagé entre Google Drive, Gmail et Google Photos. De plus, Google One offre des avantages supplémentaires et peut être partagé avec les membres de votre famille.</p>
          <p className="google-one-learn-more">En savoir plus sur Google One</p>
        </div>
      </section>
    </main>
  );
};

export default Main;
