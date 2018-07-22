import React, { Component } from 'react';
import styled from 'styled-components';

class HSide extends Component{
    render(){
        const { isScrolling } = this.props;
        return(
            <HeaderSideBox>
                <Util isScrolling={isScrolling} href="#">고객센터</Util>
                <Util isScrolling={isScrolling} href="#">로그인</Util>
            </HeaderSideBox>
        );
    }
}

const HeaderSideBox = styled.div`
    // border: 1px solid black;
    display: inline-block;
    height: 50px;
    line-height: 78px;
    margin-left: 50px;
`
const Util = styled.a`
    text-decoration: none;
    margin-left: 20px;

    &:hover{
        opacity: 0.5;
    }
    ${props => {
        if(props.isScrolling){
            return `color: black;`;
        } else {
            return `color: white;`;
        }
    }};
`

export default HSide;