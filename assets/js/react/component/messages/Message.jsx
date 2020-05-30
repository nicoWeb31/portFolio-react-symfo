import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <li>
                Message : {this.props.message.id } de : {this.props.message.name } -- {this.props.message.email}
                <p>Contenu :
                {this.props.message.content}
                </p>
                <button className='btn btn-danger'>Supprimer</button>
            </li>
        );
    }
}

export default Message;