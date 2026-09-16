import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelance from './pages/Freelances';
import Header from './components/Header';
import ClientForm from './components/ClientForm';
import FreelanceForm from './components/FreelanceForm';
import Error from './components/Error';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />}>
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>
        <Route path="/results" element={<Results />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
