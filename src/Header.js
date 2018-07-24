import React from 'react'
import logo from './logo.svg';
import PropTypes from 'prop-types';



export class Header extends React.Component{
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component WILL RECEIVE PROPS!'+nextProps);
    }

    render(){
        return(
        <header className="App-header">
            <img ref={(el)=>{
                this.img = el;
            }}
                 src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.props.appName}</h1>
        </header>
        )
    }
}

Header.propTypes = {
    appName: PropTypes.string
};

export default Header;