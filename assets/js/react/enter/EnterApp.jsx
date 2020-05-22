import React, { Component } from 'react';
import Header from '../component/Header';
// import MessageListe from '../component/messages/MessageListe';
import Home from '../component/home/Home'

class EnterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           
            <div>

               
                <Header/>
                <Home/>
                {/* <MessageListe/> */}

            </div>



        );
    }
}

export default EnterApp;

