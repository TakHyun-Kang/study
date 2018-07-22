import React, { Component } from 'react';
import './index.css';

class Upper extends Component {
    render(){
        return (
            <div className="upperContainer" >
                <div className="uppper" >
                    <div className="imgHover" />
                    <div className="frame fra1" >
                        <img className="frameImg" src="frame_home_pc.png" />
                    </div>
                    <div className="imgBox" >
                        <img className="mainImg" src="logo_katie_pc.png" />
                    </div>
                    <div className="videoBox" >
                        <video className="mainVideo" autoPlay muted playsInline loop src="mute_teaser_law_max.mp4" />
                    </div>
                </div>
                <a href="#a1" className="upperScrollBtn" />
            </div>
        );
    }
}

export default Upper;