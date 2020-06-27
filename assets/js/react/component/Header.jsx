import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';

const home = <FontAwesomeIcon icon={faHome} />
const env = <FontAwesomeIcon icon={faEnvelope} />


import Home from './home/Home';
import Contact from "./Contact/Contact";



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const text = {
      color: "#424242",
      fontFamily:" Lato",
      fontSize: "60px",
      textAlign: "center",

  };


    return (
      <>
        <BrowserRouter>
              
                    <nav className="navbar navbar-expand-lg navbar-dark bg-ligth sticky-top">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>

              <div className="collapse navbar-collapse _navBar" id="navbarColor01">
                <ul className="navbar-nav w-100">

                  <li className="nav-item  mr-auto pl-5 ">
          {/* <a className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4" href="#"> {home} <span className="mx-3">Acceuil</span></a> */}
          <Link to="/" className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4">{home} <span className="mx-3">Acceuil</span></Link>
                  </li>

                  <li className="nav-item  mx-auto pl-5 ">
                    <h2 className=" h2 text-bold text-dark" style={text} >Devkgire</h2>
                  </li>

                  <li className="nav-item ml-auto pr-5 d-flex align-items-center">
                    {/* <a className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4" href="">{env} <span className="mx-3">Contact</span></a> */}
                    <Link to="/contact" className="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4">{env} <span className="mx-3">Contact</span></Link>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#">Message</a>
                  </li> */}
                </ul>

              </div>
            </nav>


            <hr className="mt-1 mb-5 bg-dark shadow w-75" />
              
              
            <Switch>

                <Route  exact path="/">
                    <Home />
                </Route>

                <Route  exact path="/contact">
                    <Contact />
                </Route>

            </Switch>
              
      </BrowserRouter>

      </>
    );
  }
}

export default Header;
