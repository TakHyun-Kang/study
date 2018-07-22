import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';

class AboutMore extends Component {
    render() {
        const { aboutMoreDisplay } = this.props;
        const { aboutMoreDisplay2 } = this.props;
        const { aboutMoreTransform } = this.props;

        const style = {
            transform: aboutMoreTransform,
            display: aboutMoreDisplay,
        }
        return (
            <MoreBox
                moreBox
                className="moreBox"
                aboutMoreDisplay2={aboutMoreDisplay2}
                style={style}
            >
                <div>
                    <div>
                        <img src="about_pc.jpg" className="moreImg" />
                    </div>
                    <div className="moreContent" >
                        <h1 className="moreTitle" >
                            <span>About KATIE</span>
                            <strong>DARE TO BE FREE</strong>
                        </h1>
                        <p>
                            Born in Korea and raised in the States, KATIE followed her love of music to Berklee School of Music.
                            <br/>
                            In 2014, she stumbled upon an opportunity to audition for popular Korean TV show “K-pop Star,” and in 2015, she won the show.
                        </p>
                        <p>
                            That’s how KATIE was introduced to the world.
                        </p>
                        <p>
                            KATIE then signed with YG Entertainment, which has been home to global k-pop stars such as PSY, CL, and BIGBANG,
                            <br/>
                            and spent the next three years developing her sound, growing as a musician and as a person.
                            <br/>
                            KATIE re-signed with her main creative collaborator at YG, SINXITY, as the first artist on his newly formed creative collective, AXIS.
                        </p>
                        <p>
                            Finally, in 2018, she will reveal herself, ready to share her voice with the world - free.​
                        </p>
                    </div>
                    <div className="aboutCloseBtnBox" >
                        <a href="#about" onClick={this.props.closeClick} className="aboutCloseBtn" >Close</a>
                    </div>
                </div>
            </MoreBox>
        );
    }
}

const MoreBox = styled.div`
    ${props => {
        if (props.moreBox) {
            return `
                display: ${props.aboutMoreDisplay2};
            `;
        }
    }};
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    padding-bottom: 90px;
    background: #fff;
    transition: transform .6s;
    z-index: 100;
    transform: translateY(100%);
`;

export default AboutMore;