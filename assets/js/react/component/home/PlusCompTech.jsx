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
                <div className="row  d-flex justify-content-around">


                        <CardTech bg="Light Gray" name="/img/react2.png" level="React" autre="notion correct du fonctionnement global du framwork -- Plusieur petits projets"/>
                        <CardTech bg="Light Gray" name="/img/symfony.png" level="Symfony 4/5" autre="notion correct du fonctionnement global du framwork -- Plusieur petits projets -- api/apiplatform"/>
                        <CardTech bg="Light Gray" name="/img/angu.png" level="Angular 8/9" autre="notion correct du fonctionnement global du framwork -- creation d'une interface -- rxjs --observable "/>




                </div>

            </div>

        );
    }
}
export default PlusCompTech;