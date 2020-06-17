import React, { Component,Fragment } from 'react'
import Tech from '../Tech';


class CardReal extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {



        const cardStyle ={
            maxWidth: '20rem'
            
        }



        return (
            <Fragment>

                        
            <div className="card border-warning mb-3" style={cardStyle} >
                    <div className="card-header text-center text-white" style={{backgroundColor: this.props.bg}}>{this.props.Tech}</div>
                    <div className="card-body bg-secondary">

                        <a href={this.props.link}>
                            <img src={this.props.img} alt="" className='d-block mx-auto ' width="auto"/>
                        </a>

                {/* <h4 className="card-title text-center">{this.props.name}</h4> */}
                    <p className="card-text text-center pt-4" >{this.props.description}</p>
                </div>
            </div>



            </Fragment>
        );
    }
}

export default CardReal;