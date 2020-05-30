import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';


const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />


class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showplus:false,
      hover:false
    };
  }



  //show plus
  showPlus =()=>{
    console.log('showplus ok')
    this.setState({
      showPlus : !this.state.showPlus,

    })
  }

  //hover
  toggleHover=()=>{
    this.setState({
      hover: !this.state.hover
    })
  }




  render() {

    const photoStyle ={
      width :'200px',
      heigt : '300px'
    }

    const cardStyle ={
      maxWidth: '20rem'  
    }

    let linkBorder;
    if (this.state.hover) {
      linkBorder = {
        border: '#9933cc 1px solid',
        transition:'1s'
      }
      
    } else {
      linkBorder = {}
    }


    return (
      <Fragment >
        <div className="container p-4" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkBorder}>
          <h1 className="text-center">“A propos de moi”</h1>

          <div className="row mt-5">
            <div className="col-4"></div>
            <div className="col-8">
              <p></p>
            </div>
          </div>

          <div className="jumbotron">
            <div className="row">
              <div className="col-3">
                <img
                  src="/build/img/photomeComp1.jpg"
                  className="w-100 img-fluid"
                  alt=""
                  style={photoStyle}
                />
              </div>

              <div className="col-9">
                <h1 className="display-4 text-center" >
                  Développeur full stack --- junior{" "}
                </h1>
                <p class="lead">
                  Actuellement en formation développeur web/php à l'Adrar de
                  Ramonville. Formation diplômante de niveau III (bac +2), plus
                  Openclassroom et autres.
                </p>
                <hr className="my-4 bg-info" />

                <p className="lead">
                {this.state.showPlus ? (
                  <button className="btn btn-dark btn-lg" onClick={this.showPlus}>Moins {less}</button>

                ):
                (
                <button className="btn btn-dark btn-lg" onClick={this.showPlus}>Plus {plus}</button>
                )
                }




                </p>
              </div>
            </div>
        {/* show plus true */}
        {this.state.showPlus &&

          <div className="row">
            <div className="col-9 pt-5">
              <h5>Qui-suis-je ?</h5>

              <p>En reconversion depuis plus d'un ans et fort de plusieur année d'experience dans linux, je me suis lancer le defis de decouvrir
              le vaste monde du web, autodidacte et interessé pas plein de domaine j'ai jetter mon devollu sur un dommaine qui m'a toujours semblé inaccessible </p>

            </div>
            <div className="col-3">
                <div className="card border-danger mb-3" style={cardStyle}>
              <div className="card-header">Cominge - HauteGaronne </div>
              <div className="card-body">
                <h4 className="card-title">Riot - Nicolas</h4>
                <p className="card-text">37 ans, centre d'interet : Sport de montagne,bricolage,veille techno, linux, etc...</p>
              </div>
              </div>

            </div>

          </div>
        
      }

      </div>



        </div>
      </Fragment>
    );
  }
}

export default Presentation;
