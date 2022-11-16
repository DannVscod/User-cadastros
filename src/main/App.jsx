import "./App.css";
import React from "react";
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import Logo from "../Componets/template/Logo";
import Nav from "../Componets/template/Nav";
import Footer from "../Componets/template/Footer";

export default (props) => (
  <HashRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>
);
