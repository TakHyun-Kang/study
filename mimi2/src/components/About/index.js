import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';

class About extends Component {

    render() {
        return (
            <div className="aboutBox" id="about">
                <div className="inner" >
                    <h2 className="aboutTitle" >About</h2>
                    <p className="aboutP" >
                        DARE TO BE FREE.
                        <br />
                        Born in Korea and raised in the States, KATIE followed her love of music to Berklee School of Music.
                        <br />
                        In 2014, she stumbled upon an opportunity to audition for popular Korean TV show “K-pop Star,” and in 2015, she won the show.
                    </p>
                    <div className="aboutImg" >
                        <figure className="aboutFigure" />
                    </div>
                    <div className="aboutBtn" >
                        <AboutA href="#" onClick={this.props.openClick} >Learn More</AboutA>
                    </div>
                </div>
            </div>
        );
    }
}

const AboutA = styled.a`
    padding: 9px 20px 7px 40px;
    font-size: 16px;
    display: inline-block;
    position: relative;
    border-radius: 30px;
    background: #000;
    color: #fff;
    line-height: 30px;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    &::before {
        width: 10px;
        height: 10px;
        margin-top: -4px;
        background-image: url("/ico_btn_more_pc.png");
        content: "";
        position: absolute;
        left: 20px;
        top: 47%;
        background-size: 100% 100%;
    };
`;

export default About;