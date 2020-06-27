import React, { Component } from 'react';
import Header from '../component/Header';
// import MessageListe from '../component/messages/MessageListe';
import Home from '../component/home/Home';
import Footer from '../component/Footer'

class EnterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           
            <div className="container-fluid m-0 p-0 ">

               

               {/* contient les link switch */}
                <Header/>
                
                {/* <Home/> */}

                <Footer/>
                {/* <MessageListe/> */}

            </div>



        );
    }
}

export default EnterApp;

