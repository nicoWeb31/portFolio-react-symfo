import React, { Component,Fragment } from 'react';
import CardReal from './cardReal/CardReal';




class Realisation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showplus:false,
            hover:false,
            laodind:false
          }

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
            <h1 className="text-center p-3">“Réalisation”</h1>

            <div className="row  d-flex justify-content-around">
                        <CardReal bg="Light Gray" img="https://aprc.it/api/200x125/http://vtt-trail-trek-en-coeur-de-garonne.fr/" link="http://vtt-trail-trek-en-coeur-de-garonne.fr/" Tech="Symfony - react" description="Site blog,front/back pour une petite association sportive "/>

            </div>
        </div>
    


</Fragment>






        );
    }
}




export default Realisation;