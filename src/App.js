import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
