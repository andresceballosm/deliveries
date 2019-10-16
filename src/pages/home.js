import React, { Component } from 'react';
import { CardDelivery } from '../components/card';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes:[
                {
                    day:'Monday 10 2:26 PM',
                    origin:'Houston, TX, 33619',
                    destination:'Atlanta, GA, 30123',
                    total:'$250.00',
                    icon:'fas fa-truck fa-3x icon color-blue',
                    quantity:1
                },
                {
                    day:'Monday 10 2:26 PM',
                    origin:'Houston, TX, 33619',
                    destination:'Atlanta, GA, 30123',
                    total:'$250.00',
                    icon:'fas fa-truck fa-3x icon color-blue',
                    quantity:1
                },
                {
                    day:'Monday 10 2:26 PM',
                    origin:'Houston, TX, 33619',
                    destination:'Atlanta, GA, 30123',
                    total:'$250.00',
                    icon:'fas fa-truck fa-3x icon color-blue',
                    quantity:1
                }
            ]
        }
    }
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="icon-text">
                            <i className="fa fa-lightbulb" />
                            <p style={{marginLeft:10}}>Smart filters</p>
                        </div>
                        <hr />
                        <div className="icon-text">
                            <i className="fab fa-salesforce fa-2x col-lg-6 col-md-8"/>
                            <div className="custom-control custom-switch-own switches-margin col-lg-6 col-md-4">
                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                <label className="custom-control-label" for="customSwitch1"></label>
                            </div>  
                        </div>  
                        <div className="icon-text">
                            <i className="fa fa-calendar-alt fa-2x col-lg-6 col-md-8" style={{paddingRight:30}} />
                            <div className="custom-control custom-switch-own switches-margin col-lg-6 col-md-4">
                                <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                <label className="custom-control-label" for="customSwitch2"></label>
                            </div>  
                        </div>  
                        <div className="icon-text">
                            <i className="far fa-heart fa-2x col-lg-6 col-md-8" />
                            <div className="custom-control custom-switch-own switches-margin col-lg-6 col-md-4">
                                <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                                <label className="custom-control-label" for="customSwitch3"></label>
                            </div>  
                        </div>   
                        <hr />
                        <p style={{textAlign:'center'}}>Status</p>   
                        <div className="form-group has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>          
                        <input type="text" className="form-control card-destination" value="Delivered" />             
                    </div>
                    <div className="separator" />
                    <div className="col-10-own">
                        <div className="float-rig">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            { this.state.routes.map((l, i) =>
                                <CardDelivery 
                                data={l}
                                key={i}
                                />
                            )}
                        </div>
                        <a href="#" class="float">
                            <i class="fa fa-plus my-float"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;