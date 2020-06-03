import React, { Component } from 'react';

class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="d-flex justify-content-center">

            {this.props.laodind && 
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
            }
        </div>
        );
    }
}

export default Spinner;
