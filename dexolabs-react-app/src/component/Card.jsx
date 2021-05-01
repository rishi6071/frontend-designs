import React from 'react';
import './css/Home.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Card = (props) => {

    return (
        <>
            <div className="col-md-4 col-sm-6 mt-3">
                <div class="card h-100" style={{boxShadow: "0px 2px 5px lightgrey"}} id={props.id} >
                    <img src={props.imgsrc} class="card-img-top" alt={props.alternateText} />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <a href="#" class="btn btn-get-started">Read More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;