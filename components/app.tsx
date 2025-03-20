// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import main from './main'; // Importiere die Seite, die du verknüpfen möchtest
import privacypolicy from './privacypolicy'; // Eine weitere Seite (optional)

function App() {
  return (
    <Router>
      <Switch>
        {/* Route für die Startseite */}
        <Route path="/" element={<main />} />
        
        {/* Route für die Datenschutz-Seite */}
        <Route path="/privacypolicy" element={<privacypolicy />} />
        
        {/* Fange alle nicht definierten Routen ab und zeige eine 404-Seite */}
        <Route component={() => <h2>Page Not Found (404)</h2>} />
      </Switch>
    </Router>
  );
}

export default App;
