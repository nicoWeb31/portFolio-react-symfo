import React, { Component } from 'react';
import Presentation from './Presentation';
import Tech from './Tech';
import Realisation from './Realisation'



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover:false
        };


    }

    toggleHover=()=>{
        console.log('mousse hover')
        this.setState({
            hover:true
            
        })
    }


    render() {
       

        return (
            <>
            <Presentation />
            <hr className="mt-1 mb-5 bg-dark shadow w-75" />
            <Tech />
            <hr className="mt-1 mb-5 bg-dark shadow w-75" />
            <Realisation/>
            <hr className="mt-1 mb-5 bg-dark shadow w-75" />
            
            </>
            
        );
    }
}

export default Home;