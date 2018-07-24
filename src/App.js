import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from './Header.js';
import ServiceList from "./ServiceList";


class App extends Component {

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate!')
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }


    constructor(props){
        super(props);
        this.state={
            desc:"react demo",
            appName:"react demo 2018"
        };
        // this.onClick=this.changeAppDesc.bind(this);
    }

    changeAppDesc = () => {
        this.setState({
            desc:"react demo 2018"
        });
        // this.img.src = "/no-existing"
    }

    changeAppName = () => {
        this.setState({
            appName:"react redux"
        },()=>{
            console.log(this.state.appName);
        });

        // this.img.src = "/no-existing"
    }


  render() {
    return (
      <div className="App">
          <Header appName={this.state.appName}/>

        <p className="App-intro">
            {this.state.desc}
        </p>
          <button id="btn1" onClick={this.changeAppName}>change appName</button>
          <button id="btn2" onClick={this.changeAppDesc}>change desc</button>
          <ServiceList/>
      </div>

    );
  }

}

App.propTypes = {
    hello: PropTypes.string.isRequired
};

export default App;
