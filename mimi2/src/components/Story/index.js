import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import './index.css';

class Story extends Component {
    render() {
        return (
            <div className="storyBox" >
                <div className="storyInner" >
                    <h2 className="storyTitle" > 
                        <span>The Story</span>
                        Behind The M/V
                    </h2>
                    <figure className="storyImg" />
                    <p>
                        REMEMBER: the birth of KATIE
                        <br/>
                        The 'REMEMBER' music video features KATIE amidst a new universe.
                        <br/>
                        KATIE watches the new world laid before her, modest in comparison to her self.
                    </p>
                    <ul className="storyThumb" >
                        <li>
                            <img src="thumb_story01.jpg" alt />
                        </li>
                        <li>
                            <img src="thumb_story02.jpg" alt />
                        </li>
                        <li>
                            <img src="thumb_story03.jpg" alt />
                        </li>
                        <li>
                            <img src="thumb_story04.jpg" alt />
                        </li>
                    </ul>
                    <div className="storyMoreBtnBox" >
                        <StoryMoreBtn href="#" className="storyMoreBtn" >
                            Learn More
                        </StoryMoreBtn>
                    </div>
                </div>
            </div>
        );
    }
}

const StoryMoreBtn = styled.a`
    padding: 7px 20px 7px 40px;
    font-size: 16px;
    font-weight: 300;
    display: inline-block;
    position: relative;
    border-radius: 30px;
    background: #000;
    color: #fff;
    line-height: 30px;
    text-decoration: none;
    outline: none;
    &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        left: 20px;
        top: 20px;
        background-image: url(/ico_btn_more_pc.png);
    }
`;

export default Story;