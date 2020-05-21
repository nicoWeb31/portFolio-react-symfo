import React from 'react';
import HttpRequester from './HttpRequester';


class MessageListe extends HttpRequester {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    componentDidMount() {
        
        fetch('https://127.0.0.1:8000/api/liste-message').then((response)=>{
        
        response = response.json();
        response.then((res)=>{
            console.log(res);
        })
    })
        
        
        
    }
    

    render() {

        console.log('toto');
        return (
            <div>
                liste messages
            </div>
        );
    }
}

export default MessageListe;