import React from 'react';

export const CardDelivery = (props) => {
    let data = props.data;
    return (
        <li className="row">
            <div className="col-1">
                <i className="fas fa-check-circle fa-4x color-yellow vertical-center"></i>
            </div>
            <div className="card-delivery card-direction col-11">
                <div className="row col-1-own">
                    <div className="col-10-own parent justify-day">
                        <p className="color-blue vertical-center">{data.day}</p> 
                    </div>
                    <div className="separator-card col-lg-1" />
                </div>
                <div className="row col-lg-4 col-md-4 card-destination" style={{padding:1}}>
                    <div className="col-lg-2 col-md-2 parent">
                        <i className="fas fa-location-arrow fa-1x color-cream vertical-center"></i>
                    </div>
                    <div className="col-lg-10 col-md-10">
                        <p className="color-blue" >{data.origin}</p> 
                        <i className="fas fa-chevron-down fa-2x color-yellow align-icon"></i>
                        <p className="color-blue">{data.destination}</p> 
                    </div>
                </div> 
                <div className="col-lg-2 col-md-2" style={{marginTop:30}}>
                    <i className={props.data.icon}></i>
                </div>
                <div className="col-lg-3 col-md-3 total parent">
                    <p className="vertical-center">{data.total}</p>
                </div>
                <div className="col-lg-1 col-md-1 parent">
                    <div className="quantity-bag  vertical-center">
                        <p>{data.quantity}</p>
                    </div>
                </div>
                <div className="col-lg-1 col-md-1 parent">
                    <i className="fas fa-ellipsis-v fa-1x color-blue align-icon vertical-center"></i>
                </div>  
            </div>
        </li>
    )
};
