import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    render(){
        return (
            <header className="header" >
                <div className="headerInner" >
                    <span className="logo" />
                    <a className="axisLink" href="http://axisccp.com/" />
                </div>
            </header>
        );
    }
}

export default Header;