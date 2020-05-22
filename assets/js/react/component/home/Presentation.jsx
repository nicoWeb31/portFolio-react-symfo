import React, { Component,Fragment } from 'react'

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Fragment>

<div className="container">

            <h1 className ="text-center" >“A propos de moi”</h1>


            <div className="row mt-5">
                <div className="col-4">

                    

                </div>
                <div className="col-8">

            <p></p>

                </div>
            </div>


<div class="jumbotron">
    <div className="row">
       <div className="col-3">
           <img src="https://picsum.photos/200/300" className="w-100 p-4 img-fluid" alt=""/>
       </div>

       <div className="col-9">
       <h1 class="display-3 text-center">développeur full stack junior</h1>
  <p class="lead">TActuellement en formation développeur web/php à l'Adrar de Ramonville.
            Formation diplômante de niveau III (bac +2), plus Openclassroom et autres.</p>
  <hr class="my-4 bg-info"/>

  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
           </div>
    </div>

</div>


</div>




            

            </Fragment>
        );
    }
}

export default Presentation;