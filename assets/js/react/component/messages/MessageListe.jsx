import React from 'react';
import Message from './Message'



class MessageListe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages : ""
        };
    }
    
    componentDidMount() {
        
        fetch('https://127.0.0.1:8000/api/liste-message').then((response)=>{
        
        response = response.json();
        response.then((res)=>{
            //console.log(res);
            this.setState({
                messages : res
            })
        })
    })
        
        
        
    }
    

    render() {

        return (
            <div>
                <h3 className="mt-4">Liste Messages : </h3>

            <ul>
                {this.state.messages.length ? (this.state.messages.map((ele) =>
                    <Message  key={ele.id} message={ele} />
                    )) :
                    (<div> Loaging </div>)
                    }
                    
            </ul>



            </div>
        );
    }
}

export default MessageListe;