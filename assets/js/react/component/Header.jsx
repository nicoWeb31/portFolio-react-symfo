import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';

const home = <FontAwesomeIcon icon={faHome} />
const env = <FontAwesomeIcon icon={faEnvelope} />



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
      <div className="container-fluid m-0 p-0 ">

              <nav class="navbar navbar-expand-lg navbar-dark bg-ligth ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

        <div class="collapse navbar-collapse _navBar" id="navbarColor01">
          <ul class="navbar-nav w-100">

            <li class="nav-item  mr-auto pl-5 ">
    <a class="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4" href="#"> {home} <span className="mx-3">Acceuil</span></a>
            </li>

            <li class="nav-item  mx-auto pl-5 ">
              <h2 class=" h2 text-bold text-dark">R-N-Dev-Web</h2>
            </li>

            <li class="nav-item ml-auto pr-5 d-flex align-items-center">
              <a class="nav-link h2 text-bold text-dark btn btn-outline-secondary m-2 p-4" href="">{env} <span className="mx-3">Contact</span></a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Message</a>
            </li> */}
          </ul>

        </div>
      </nav>

      </div>
      <hr class="mt-1 mb-5 bg-dark shadow w-75" />
      </>
    );
  }
}

export default Header;
