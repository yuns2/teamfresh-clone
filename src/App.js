import React from "react"
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Search from "./routes/DeliveryArea";
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search" component={Search} />
    </HashRouter>
  )
}

export default App;
