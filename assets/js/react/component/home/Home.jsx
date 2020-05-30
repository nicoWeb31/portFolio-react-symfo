import React, { Component } from 'react';
import Presentation from './Presentation';
import Tech from './Tech';



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
            <hr class="mt-1 mb-5 bg-dark shadow w-75" />
            <Tech />
            <hr class="mt-1 mb-5 bg-dark shadow w-75" />

            </>
        );
    }
}

export default Home;