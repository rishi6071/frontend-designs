import React from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Common = (props) => {

    return (
        <>
            {/* Page Content */}
            <div className="col-md-6 order-lg-1 order-2 my-md-5 d-flex justify-content-center flex-column">
                <h2 className="page-main-caption">{props.mainCaption} <strong>Dexolabs Infotech</strong></h2>
                <h6 className="my-3 page-sub-caption">{props.subCaption}</h6>
                <Link to={props.visit} className="btn btn-get-started">{props.btnName}</Link>
            </div>

            {/* Page Image */}
            <div className="col-md-6 order-lg-2 order-1 py-3">
                <img src={props.imgSrc} className="page_banner" alt={props.alt} />
            </div>
        </>
    );
}

export default Common;