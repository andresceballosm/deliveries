import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './components/menu';
import Home from './pages/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeActive:0,
      routes:[
        {
          route:0,
          name:'Home',
          icon:'fas fa-home fa-lg icon' 
        },
        {
          route:1,
          name:'Messages',
          icon:'fas fa-envelope-square fa-lg icon'
        },
        {
          route:2,
          name:'Wishlist',
          icon:'fas fa-star fa-lg icon'
        },
        {
          route:3,
          name:'Settings',
          icon:'fas fa-cog fa-lg icon'
        },
        {
          route:4,
          name:'My Account',
          icon:'fas fa-user fa-lg icon'
        }
      ]
    }
  }

  changeRoute(route){
    this.setState({routeActive:route})
  }

  render(){
    return (
      <div className="content animated fadeIn slower">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2">
            <img src={logo} alt="Avatar" className="logo" />
          </div>
          <div className="col-xl-10 col-lg-10 col-sm-9">
            <ul className="">
              { this.state.routes.map((l, i) => 
                <Menu 
                key={i} 
                route={l} 
                routeActive={this.state.routeActive}
                changeRoute={this.changeRoute.bind(this)}
                />
              )}
            </ul>
          </div>
        </div>
        <div className="body">
          {this.renderItem()}
        </div>
      
      </div>
    );
  }
  renderItem(){
    switch (this.state.routeActive) {
      case 0:
        return <Home />;
      case 1:
        return <div><p>Messages</p></div>
      case 2:
        return <div><p>Wishlist</p></div>
      case 3:
        return <div><p>Setting</p></div>
      case 4:
        return <div><p>My Account</p></div>
      default:

    }
  }
}

export default App;
