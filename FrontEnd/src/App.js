// import logo from './logo.svg';
import './App.css';
import {Header, Body, Footer} from './components';
// import {Fragment} from "react";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
          <Header />
          <Body />
          <Footer />
      </Router>
  );
}

export default App;
