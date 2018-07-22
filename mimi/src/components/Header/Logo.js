import React, { Component } from 'react';
import styled from 'styled-components';

class Logo extends Component{
    render(){
        const { isScrolling } = this.props;
        return(
            <MimiLogo isScrolling={isScrolling} className="MiLogo" href="localhost:3000">MIMI</MimiLogo>
        );
    }
}

const MimiLogo = styled.a`
    font-size: 3rem;
    text-decoration: none;
    cursor: pointer;
    ${props => {
        if(props.isScrolling){
            return `color: black;`;
        } else {
            return `color: white;`;
        }
    }};
    margin-left: 50px;
`

export default Logo;