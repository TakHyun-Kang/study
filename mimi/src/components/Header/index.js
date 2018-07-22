import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Logo from './Logo'
import GlobalNav from './GlobalNav'
import HSide from './HSide';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`;

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isScrolling: false,
        };
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    handleScroll = (e) => {
        const isScrolling = Boolean(document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight);
        if (isScrolling === this.state.isScrolling) return;
        this.setState({ isScrolling });
    };

    render() {
        const { isScrolling } = this.state;
        return (
            <HeaderBox isScrolling={isScrolling}>
                <Logo isScrolling={isScrolling} />
                <GlobalNav isScrolling={isScrolling} />
                <HSide isScrolling={isScrolling} />
            </HeaderBox>
        );
    }
}
const HeaderBox = styled.div`
    border-bottom: 1px solid rgba(218, 218, 218, 0.5);
    height: 50px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
    ${props => {
        if (props.isScrolling) {
            return `background-color: white;`;
        } else {
            return `opacity: 1;`;
        }
    }};
`;


export default Header;