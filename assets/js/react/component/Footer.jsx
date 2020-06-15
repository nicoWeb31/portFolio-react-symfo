import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        const text = {
            color: "#424242",
            fontFamily:" Lato",
            fontSize: "60px",
            textAlign: "center",
            marginTop: "50px",
          };



        return (
            <footer id="red">
            <h1 style={text}>DMC</h1>
            <h2 class="text2">&copy;	DIMENSIONMC - DESIGNED BY DEN & FLASH</h2>
            <h2 class="text3">-POWERED BY ENJIN-</h2>
            </footer>
        );
    }
}

export default Footer;