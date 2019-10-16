import React from 'react';

export const Menu = (props) => {
    return (
        <li onClick={() => props.changeRoute(props.route.route)} className="col-20 columnSt"
        style={ props.route.route === props.routeActive ? 
            { backgroundColor:'#35475c'} : { backgroundColor:'white' }
        } >
            <i className={props.route.icon}  
            style={ props.route.route === props.routeActive ? 
                { backgroundColor:'#35475c', color:'white'} : { backgroundColor:'white' }
            }   
            ></i>
            <p style={ props.route.route === props.routeActive ? 
            { backgroundColor:'#35475c', color:'white'} : { backgroundColor:'white' }
            }>{props.route.name}</p>
        </li>
    )
}
