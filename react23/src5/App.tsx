import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Presentation from './components/Presentation';
import Tutorial from './components/Tutorial';


function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
         <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
          Presentation
          </Link>
          <Link to="/tutorial" style={{ padding: 5 }}>
          Tutorial
          </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;