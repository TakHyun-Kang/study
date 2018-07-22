import React, { Component } from 'react';
import styled from 'styled-components';
import './index.css';

class Movie extends Component {

    state = {
        iframeStyle: '',
        autoplay: '',
        translate3d: -120,

        lastScrollTop: 0,
        delta: 2300,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hasScrolled);
        setInterval(this.didScroll, 100);
    };

    didScroll = () => {
        if (window.scrollY > 2300) {
            this.hasScrolled();
        }
    };

    hasScrolled = () => {
        if (window.scrollY > 2300) {
            const st = window.scrollY;
            if (st > this.state.lastScrollTop && this.state.translate3d > -200) {
                this.setState({
                    translate3d: this.state.translate3d - 1,
                });
            } else if (st < this.state.lastScrollTop && this.state.translate3d < -121) {
                this.setState({
                    translate3d: this.state.translate3d + 1,
                });
            };
            this.setState({
                lastScrollTop: st,
            });
        }
    };

    playClick = () => {
        if (this.state.iframeStyle === '') {
            this.setState({
                iframeStyle: 'block',
                autoplay: '&amp;autoplay=1',
            });
        };
    };

    render() {
        const { autoplay } = this.state;
        const { translate3d } = this.state;

        const style = {
            display: this.state.iframeStyle,
        }

        return (
            <div className="moiveBox" >
                <MovieTitle movieTitle translate3d={translate3d} >REMEMBER</MovieTitle>
                <div className="movieWrap" >
                    <div className="moviePoster" >
                        <figure className="moviePosterImg" />
                    </div>
                    <iframe
                        style={style}
                        id="movieVidio"
                        frameBorder ="0"
                        allowFullScreen="1"
                        allow="autoplay; encrypted-media"
                        title="YouTube video player"
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/IAWI6nMQhQI?start=0&amp;playsinline=1&amp;showinfo=0&amp;controls=1&amp;rel=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Faxisccp.com&amp;widgetid=1?rel=0${autoplay}`}
                    />
                    <div className="movieBtn" onClick={this.playClick} />
                </div>
            </div>
        );
    }
}

const MovieTitle = styled.h2`
    right: 8px;
    top: 130px;
    font-size: 200px;
    overflow: hidden;
    position: absolute;
    font-weight: 700;
    color: #000;
    line-height: 1;
    z-index: 30;
    ${props => {
        if (props.movieTitle) {
            return `
                transform: translate3d(0px, ${props.translate3d}%, 0px);
            `;
        }
    }};
`;

export default Movie;