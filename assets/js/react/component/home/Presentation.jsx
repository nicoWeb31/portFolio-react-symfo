import React, { Component, Fragment } from "react";
import Spinner from "../utils/Spinner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import  PlusPes  from "./PlusPes";



const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />


class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showplus:false,
      hover:false,
      laodind:false
    };
  }



  //show plus
  showPlus =()=>{
    //console.log('showplus ok')
    this.setState({ laodind: true });
    
    setTimeout(() => {
      this.setState({ 
        showPlus : !this.state.showPlus,
        laodind: false });
        
    }, 300);
    
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
                  src="/img/photomeComp1.jpg"
                  className="w-100 img-fluid"
                  alt=""
                  style={photoStyle}
                />
              </div>

              <div className="col-9">
                <h1 className="display-4 text-center" >
                  Développeur full stack --- junior{" "}
                </h1>
                <p className="lead">
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
                <button className="btn btn-dark btn-lg d-block" onClick={this.showPlus}>Plus {plus}</button>
                )
                }
                </p>
                <Spinner laodind={this.state.laodind}/>
                


              </div>
            </div>
        {/* show plus true */}
        {this.state.showPlus &&

          <PlusPes/>
        
      }

      </div>



        </div>
      </Fragment>
    );
  }
}

export default Presentation;
