import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import './index.css';

import Waypoint from 'react-waypoint';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

class Header extends Component {

    state = {
        navBGColor1: '#fff',
        navBGColor2: '',
        navBGColor3: '',
        navBGColor4: '',
        navBGColor5: '',
        navHBGColor1: '',
        navHBGColor2: 'rgba(0,0,0,0.6)',
        navHBGColor3: 'rgba(0,0,0,0.6)',
        navHBGColor4: 'rgba(0,0,0,0.6)',
        navHBGColor5: 'rgba(0,0,0,0.6)',
        navColor1: '#000',
        navColor2: '#fff',
        navColor3: '#fff',
        navColor4: '#fff',
        navColor5: '#fff',
        navTextDeco1: 'underline',
        navTextDeco2: 'none',
        navTextDeco3: 'none',
        navTextDeco4: 'none',
        navTextDeco5: 'none',
        logoWidth: '306px',
        logoHeight: '193px',
        logoMarginTop: '-70px',
    }

    navClick = (e) => {
        if (e.target.id === 'home') {
            this.setState({
                navBGColor1: '#fff',
                navBGColor2: '',
                navBGColor3: '',
                navBGColor4: '',
                navBGColor5: '',
                navHBGColor1: '',
                navHBGColor2: 'rgba(0,0,0,0.6)',
                navHBGColor3: 'rgba(0,0,0,0.6)',
                navHBGColor4: 'rgba(0,0,0,0.6)',
                navHBGColor5: 'rgba(0,0,0,0.6)',
                navColor1: '#000',
                navColor2: '#fff',
                navColor3: '#fff',
                navColor4: '#fff',
                navColor5: '#fff',
                navTextDeco1: 'underline',
                navTextDeco2: 'none',
                navTextDeco3: 'none',
                navTextDeco4: 'none',
                navTextDeco5: 'none',
            });
        } else if (e.target.id === 'recipes') {
            this.setState({
                navBGColor1: '',
                navBGColor2: '#fff',
                navBGColor3: '',
                navBGColor4: '',
                navBGColor5: '',
                navHBGColor1: 'rgba(0,0,0,0.6)',
                navHBGColor2: '',
                navHBGColor3: 'rgba(0,0,0,0.6)',
                navHBGColor4: 'rgba(0,0,0,0.6)',
                navHBGColor5: 'rgba(0,0,0,0.6)',
                navColor1: '#fff',
                navColor2: '#000',
                navColor3: '#fff',
                navColor4: '#fff',
                navColor5: '#fff',
                navTextDeco1: 'none',
                navTextDeco2: 'underline',
                navTextDeco3: 'none',
                navTextDeco4: 'none',
                navTextDeco5: 'none',
            });
        } else if (e.target.id === 'tips') {
            this.setState({
                navBGColor1: '',
                navBGColor2: '',
                navBGColor3: '#fff',
                navBGColor4: '',
                navBGColor5: '',
                navHBGColor1: 'rgba(0,0,0,0.6)',
                navHBGColor2: 'rgba(0,0,0,0.6)',
                navHBGColor3: '',
                navHBGColor4: 'rgba(0,0,0,0.6)',
                navHBGColor5: 'rgba(0,0,0,0.6)',
                navColor1: '#fff',
                navColor2: '#fff',
                navColor3: '#000',
                navColor4: '#fff',
                navColor5: '#fff',
                navTextDeco1: 'none',
                navTextDeco2: 'none',
                navTextDeco3: 'underline',
                navTextDeco4: 'none',
                navTextDeco5: 'none',
            });
        } else if (e.target.id === 'about') {
            this.setState({
                navBGColor1: '',
                navBGColor2: '',
                navBGColor3: '',
                navBGColor4: '#fff',
                navBGColor5: '',
                navHBGColor1: 'rgba(0,0,0,0.6)',
                navHBGColor2: 'rgba(0,0,0,0.6)',
                navHBGColor3: 'rgba(0,0,0,0.6)',
                navHBGColor4: '',
                navHBGColor5: 'rgba(0,0,0,0.6)',
                navColor1: '#fff',
                navColor2: '#fff',
                navColor3: '#fff',
                navColor4: '#000',
                navColor5: '#fff',
                navTextDeco1: 'none',
                navTextDeco2: 'none',
                navTextDeco3: 'none',
                navTextDeco4: 'underline',
                navTextDeco5: 'none',
            });
        } else if (e.target.id === 'contact') {
            this.setState({
                navBGColor1: '',
                navBGColor2: '',
                navBGColor3: '',
                navBGColor4: '',
                navBGColor5: '#fff',
                navHBGColor1: 'rgba(0,0,0,0.6)',
                navHBGColor2: 'rgba(0,0,0,0.6)',
                navHBGColor3: 'rgba(0,0,0,0.6)',
                navHBGColor4: 'rgba(0,0,0,0.6)',
                navHBGColor5: '',
                navColor1: '#fff',
                navColor2: '#fff',
                navColor3: '#fff',
                navColor4: '#fff',
                navColor5: '#000',
                navTextDeco1: 'none',
                navTextDeco2: 'none',
                navTextDeco3: 'none',
                navTextDeco4: 'none',
                navTextDeco5: 'underline',
            });
        };
    };

    componentDidMount() {
        window.addEventListener('scroll', this._handleScrollNav);
    };

    _handleScrollNav = () => {
        if (window.scrollY > 100) {
            this.setState({
                logoWidth: '95px',
                logoHeight: '60px',
                logoMarginTop: '0px',
            });
        } else if (window.scrollY < 100) {
            this.setState({
                logoWidth: '306px',
                logoHeight: '193px',
                logoMarginTop: '-70px',
            });
        }
    };

    render() {

        const { navBGColor1 } = this.state;
        const { navBGColor2 } = this.state;
        const { navBGColor3 } = this.state;
        const { navBGColor4 } = this.state;
        const { navBGColor5 } = this.state;

        const { navHBGColor1 } = this.state;
        const { navHBGColor2 } = this.state;
        const { navHBGColor3 } = this.state;
        const { navHBGColor4 } = this.state;
        const { navHBGColor5 } = this.state;

        const { navColor1 } = this.state;
        const { navColor2 } = this.state;
        const { navColor3 } = this.state;
        const { navColor4 } = this.state;
        const { navColor5 } = this.state;

        const { navTextDeco1 } = this.state;
        const { navTextDeco2 } = this.state;
        const { navTextDeco3 } = this.state;
        const { navTextDeco4 } = this.state;
        const { navTextDeco5 } = this.state;

        const navStyle = {
            position: 'sticky',
            top: '0',
        }

        const logoStyle = {
            width: this.state.logoWidth,
            height: this.state.logoHeight,
            marginTop: this.state.logoMarginTop,
        }

        return (
            <div className="headerBox" style={navStyle} >
                <div className="headerInner" >
                    <a href="http://localhost:3000/" className="headerLogo" >
                        <div className="headerLogoImg" style={logoStyle} />
                    </a>
                    <div className="headerIconBox" >
                        <FontAwesomeIcon className="headerIcon" icon="search" size="1x" />
                    </div>
                    <div className="navBox" >
                        <ul className="navList" >
                            <NavListLi home navBGColor1={navBGColor1} navTextDeco1={navTextDeco1} navHBGColor1={navHBGColor1} >
                                <NavListA href="#" homeA onClick={this.navClick} id="home" navColor1={navColor1} >
                                    Home
                                </NavListA>
                            </NavListLi>
                            <NavListLi recipes navBGColor2={navBGColor2} navTextDeco2={navTextDeco2} navHBGColor2={navHBGColor2} >
                                <NavListA href="#" recipesA onClick={this.navClick} id="recipes" navColor2={navColor2} >
                                    Recipes
                                </NavListA>
                            </NavListLi>
                            <NavListLi tips navBGColor3={navBGColor3} navTextDeco3={navTextDeco3} navHBGColor3={navHBGColor3} >
                                <NavListA href="#" tipsA onClick={this.navClick} id="tips" navColor3={navColor3} >
                                    Seasoning Tips
                                </NavListA>
                            </NavListLi>
                            <NavListLi about navBGColor4={navBGColor4} navTextDeco4={navTextDeco4} navHBGColor4={navHBGColor4} >
                                <NavListA href="#" aboutA onClick={this.navClick} id="about" navColor4={navColor4} >
                                    About
                                </NavListA>
                            </NavListLi>
                            <NavListLi contact navBGColor5={navBGColor5} navTextDeco5={navTextDeco5} navHBGColor5={navHBGColor5} >
                                <NavListA href="#" contactA onClick={this.navClick} id="contact" navColor5={navColor5} >
                                    Contact
                                </NavListA>
                            </NavListLi>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const NavListLi = styled.li`
    text-align: center;
    transition: background-color 300ms ease-in 0ms;
    display: inline-block;
    margin: 0;
    padding: 18px 0;
    ${props => {
        if (props.home) {
            return `
                background-color: ${props.navBGColor1};
                &:hover {
                    background-color: ${props.navHBGColor1};
                    text-decoration: ${props.navTextDeco1};
                };
            `;
        } else if (props.recipes) {
            return `
                background-color: ${props.navBGColor2};
                &:hover {
                    background-color: ${props.navHBGColor2};
                    text-decoration: ${props.navTextDeco2};
                };
            `;
        } else if (props.tips) {
            return `
                background-color: ${props.navBGColor3};
                &:hover {
                    background-color: ${props.navHBGColor3};
                    text-decoration: ${props.navTextDeco3};
                };
            `;
        } else if (props.about) {
            return `
                background-color: ${props.navBGColor4};
                &:hover {
                    background-color: ${props.navHBGColor4};
                    text-decoration: ${props.navTextDeco4};
                };
            `;
        } else if (props.contact) {
            return `
                background-color: ${props.navBGColor5};
                &:hover {
                    background-color: ${props.navHBGColor5};
                    text-decoration: ${props.navTextDeco5};
                };
            `;
        }
    }};
`;

const NavListA = styled.a`
    padding: 20px 25px;
    font-size: 21px;
    line-height: 24px;
    font-family: 'Domine', serif;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    background-color: transparent;
    ${props => {
        if (props.homeA) {
            return `
                color: ${props.navColor1};
            `;
        } else if (props.recipesA) {
            return `
                color: ${props.navColor2};
            `;
        } else if (props.tipsA) {
            return `
                color: ${props.navColor3};
            `;
        } else if (props.aboutA) {
            return `
                color: ${props.navColor4};
            `;
        } else if (props.contactA) {
            return `
                color: ${props.navColor5};
            `;
        }
    }};
`;

export default Header;