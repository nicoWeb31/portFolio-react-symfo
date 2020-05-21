import React, { Component } from 'react';
import Header from '../component/Header';
import MessageListe from '../component/MessageListe'

class EnterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           
            <div className="container">

               
                <Header/>
                <MessageListe/>

            </div>



        );
    }
}

export default EnterApp;

