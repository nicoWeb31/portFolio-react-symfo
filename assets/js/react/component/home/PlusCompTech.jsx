import React, { Component } from 'react';
import CardTech from './cardTech/cardTech'


class PlusCompTech extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {



        return (
            <div>
                <div className="row">

                        <CardTech bg="green" name="/img/linux60.png" level="Linux - mint 19.3" autre=" Environement de travail depuis plusieur années "/>
                        <CardTech bg="green" name="/img/html60.png" level="Html" autre=" utilisation quotidienne"/>

                        <CardTech bg="green" name="/img/css360.png" level="Css" autre=" utilisation quotidienne"/>
                        <CardTech bg="green" name="/img/git60.png" level="Git - Github" autre=" utilisation quotidienne"/>
                        <CardTech bg="DarkCyan" name="/img/js60.png" level="js - jsx -typescript" autre=" utilisation quotidienne avec doc"/>
                        <CardTech bg="DarkCyan" name="/img/php60h.png" level="PHP - mysql" autre=" utilisation reguliere avec doc"/>
                        <CardTech bg="DarkCyan" name="/img/boot60.png" level="Bootstrap" autre=" utilisation reguliere avec doc"/>

                        <CardTech bg="LightSalmon" name="/img/react2.png" level="React" autre=" notion correct du framwork - en cours"/>
                        <CardTech bg="LightSalmon" name="/img/symfony.png" level="Symfony 4/5" autre=" notion correct du framwork - en cours"/>
                        <CardTech bg="LightSalmon" name="/img/angu.png" level="Angular 8/9" autre=" notion correct du framwork - en cours"/>


                </div>

            </div>

        );
    }
}
export default PlusCompTech;