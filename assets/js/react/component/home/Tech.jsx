import React, { Component,Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import  PlusCompTech  from './PlusCompTech';
import Spinner from "../utils/Spinner";
import CardTech from "../home/cardTech/cardTech";


const plus = <FontAwesomeIcon icon={faPlus} />
const less = <FontAwesomeIcon icon={faMinus} />



class Tech extends Component {
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

        const stylePhoto = {
            width: '180px',
            height: '180px',

        };


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

    <Fragment>
      
      
        <div className="container p-4" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={linkBorder}>
          <h1 className="text-center">“Compétence / Tecno”</h1>

          <div className="row mt-5">
            <div className="col-4"></div>
            <div className="col-8">
              <p></p>
            </div>
          </div>

          <div className="jumbotron">
            <div className="row">
                <div className='col'></div>
                <div className="col-10 d-flex justify-content-between">
                    {/* <img src="img/react.png"  style={stylePhoto} alt="logo_react"/>
                    <img src="img/symfony_white.png" alt="logo_symfo" style={stylePhoto} />
                    <img src="img/angu_ok.png" alt="ogo_angu" style={stylePhoto}/> */}

                        <CardTech bg="green" name="/img/html60.png" level="Html" autre=" utilisation quotidienne"/>
                        <CardTech bg="green" name="/img/css360.png" level="Css" autre=" utilisation quotidienne"/>
                        <CardTech bg="green" name="/img/js60.png" level="js - jsx -typescript" autre=" utilisation quotidienne"/>
                        <CardTech bg="green" name="/img/php60h.png" level="PHP - mysql" autre=" utilisation reguliere"/>

                </div> 
                <div className='col'></div>
            </div>
                <hr className="m-4 bg-info" />

            <div className="row p-5">

                <div className="col-2"></div>
                <div className="col-8">

                <h1 className="display-6 text-center"></h1>
                <p className="lead text-center p-4">Meilleurs amis : </p>
                <div className="d-flex justify-content-around">
                  <img src="/img/github.svg" alt="git" width="90px" className="img-fluid"/>
                  <img src="/img/boot.svg" alt="git" width="90px"/>
                  <img src="/img/mint.png" alt="git" width="90px"/>
                  <img src="/img/post.svg" alt="git" width="90px"/>

                </div>

                <hr className="mx-auto bg-info" />
                
                <p className="lead">
                {this.state.showPlus ? (
                  <button className="btn btn-dark btn-lg" onClick={this.showPlus}>Moins {less}</button>

                ):
                (
                <button className="btn btn-dark btn-lg" onClick={this.showPlus}>Plus {plus}</button>
                )
                }
                </p>
                <Spinner laodind={this.state.laodind}/>




                <div className="col-2"></div>


            </div>

            </div>

{/* show plus true */}
{this.state.showPlus &&
  <PlusCompTech/>
}



            </div>
          </div>
    
      </Fragment>
            
        );
    }
}

export default Tech;