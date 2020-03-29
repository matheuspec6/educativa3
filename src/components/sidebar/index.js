import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './sidebar.css';
import M from "materialize-css";
import UseAnimations from 'react-useanimations';
import user from "./user.png";
import bg from "./bg.jpg";

import 'hover.css';

class NavSide extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });


  }

  render() {
    return (
      <div className="container">
        <div className="row col s6">
        <ul id="slide-out" class="sidenav sidenav-fixed">
        <div className="row hvr-grow-shadow">
          <img alt="logo" className="center logo" src={logo} />
        </div>
        <li>
          <Link className="hvr-icon-wobble-horizontal hvr-grow-shadow">
            <span className="icon">
            <i class="fa fa-home hvr-icon"></i>
            </span>
            Inicio
          </Link>
          <a href="www.google.com" className="hvr-icon-wobble-horizontal hvr-grow-shadow">
            <span className="icon">
            <i class="fa fa-user-graduate hvr-icon"></i>
            </span>
            Cadastrar Alunos
          </a>
          <br></br>
          <a href="www.google.com" className="hvr-icon-pop hvr-grow-shadow">
            <span className="icon">
            <i class="fa fa-times-circle hvr-icon"></i>
            </span>
            Sair
          </a>
          
        </li>
        <li>
          <br/>
          <div class="user-view">
          <a href="#user"><img class="circle" src={user} /></a>
          <a href="#name"><span class=" name yellow lighten-5">John Doe</span></a>
          <a href="#email"><span class=" email">jdandturk@gmail.com</span></a>
          
        </div>
        </li>
      </ul>
      <div className="col 6">
        <h1> dsasad </h1>
        
      </div>

        </div>
      </div>
    );
  }
}
export default NavSide;