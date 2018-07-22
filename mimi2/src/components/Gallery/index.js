import React, { Component, Fragment } from 'react';
import styled, { injectGlobal } from 'styled-components';
import './index.css';

class Gallery extends Component {

    state = {
        mainDivDisplay1: "block",
        mainDivDisplay2: "none",
        mainDivDisplay3: "none",
        backgroundPositionA1: "0 -44px",
        backgroundPositionA2: "-58px 0",
        backgroundPositionA3: "-96px 0",
        beforePosition1: "absolute",
        beforePosition2: "",
        beforePosition3: "",
        controlTranslate3d1: "-1360px, 0px, 0px",
        controlTranslate3d2: "-1360px, 0px, 0px",
        controlTranslate3d3: "0px, 0px, 0px",
        imgTransform1: "1",
        imgTransform2: "0.8",
        imgTransform3: "0.8",
        imgTransform4: "0.8",
        imgTransform5: "0.8",
        imgTransform6: "0.8",
        imgTransform7: "0.8",
        imgTransition: "0.4s",
    };

    a1Click = () => {
         if (this.state.backgroundPositionA1 === "0 0") {
            this.setState({
                mainDivDisplay1: "block",
                mainDivDisplay2: "none",
                mainDivDisplay3: "none",
                backgroundPositionA1: "0 -44px",
                backgroundPositionA2: "-58px 0",
                backgroundPositionA3: "-96px 0",
                beforePosition1: "absolute",
                beforePosition2: "",
                beforePosition3: "",
            });
        }
    };

    a2Click = () => {
        if (this.state.backgroundPositionA2 === "-58px 0") {
            this.setState({
                mainDivDisplay1: "none",
                mainDivDisplay2: "block",
                mainDivDisplay3: "none",
                backgroundPositionA1: "0 0",
                backgroundPositionA2: "-58px -44px",
                backgroundPositionA3: "-96px 0",
                beforePosition1: "",
                beforePosition2: "absolute",
                beforePosition3: "",
            });
        }
    };

    a3Click = () => {
        if (this.state.backgroundPositionA3 === "-96px 0") {
            this.setState({
                mainDivDisplay1: "none",
                mainDivDisplay2: "none",
                mainDivDisplay3: "block",
                backgroundPositionA1: "0 0",
                backgroundPositionA2: "-58px 0",
                backgroundPositionA3: "-96px -44px",
                beforePosition1: "",
                beforePosition2: "",
                beforePosition3: "absolute",
            });
        }
    };

    BRightRe = () => {
        if (this.state.controlTranslate3d1 === "-6120px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-1360px, 0px, 0px",
                imgTransition: "none",
            });
        };
    };
    BRightRe2 = () => {
        if (this.state.controlTranslate3d1 === "-1360px, 0px, 0px") {
            this.setState({
                imgTransition: "0.4s",
            });
        };
    };

    BLeftRe = () => {
        if (this.state.controlTranslate3d1 === "-680px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-5440px, 0px, 0px",
                imgTransition: "none",
            });
        };
    };
    BLeftRe2 = () => {
        if (this.state.controlTranslate3d1 === "-5440px, 0px, 0px") {
            this.setState({
                imgTransition: "0.4s",
            });
        };
    };

    BirthRightClick = () => {
        if (this.state.controlTranslate3d1 === "-1360px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-2040px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "1",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-2040px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-2720px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "1",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-2720px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-3400px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "1",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-3400px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-4080px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "1",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-4080px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-4760px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "1",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-4760px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-5440px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "1",
            });
        } else if (this.state.controlTranslate3d1 === "-5440px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-6120px, 0px, 0px",
                imgTransform1: "1",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
            setTimeout(this.BRightRe, 250);
            setTimeout(this.BRightRe2, 300);
        };
    };

    BirthLeftClick = () => {
        if (this.state.controlTranslate3d1 === "-1360px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-680px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "1",
            });
            setTimeout(this.BLeftRe, 250);
            setTimeout(this.BLeftRe2, 300);
        } else if (this.state.controlTranslate3d1 === "-5440px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-4760px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "1",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-4760px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-4080px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "1",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-4080px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-3400px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "1",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-3400px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-2720px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "1",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-2720px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-2040px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "1",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        } else if (this.state.controlTranslate3d1 === "-2040px, 0px, 0px") {
            this.setState({
                controlTranslate3d1: "-1360px, 0px, 0px",
                imgTransform1: "1",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
                imgTransform7: "0.8",
            });
        };
    };

    LRightRe = () => {
        if (this.state.controlTranslate3d2 === "-5440px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-1360px, 0px, 0px",
                imgTransition: "none",
            });
        };
    };
    LRightRe2 = () => {
        if (this.state.controlTranslate3d2 === "-1360px, 0px, 0px") {
            this.setState({
                imgTransition: "0.4s",
            });
        };
    };

    LLeftRe = () => {
        if (this.state.controlTranslate3d2 === "-680px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-4760px, 0px, 0px",
                imgTransition: "none",
            });
        };
    };
    LLeftRe2 = () => {
        if (this.state.controlTranslate3d2 === "-4760px, 0px, 0px") {
            this.setState({
                imgTransition: "0.4s",
            });
        };
    };

    LogRightClick = () => {
        if (this.state.controlTranslate3d2 === "-1360px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-2040px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "1",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-2040px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-2720px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "1",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-2720px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-3400px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "1",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-3400px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-4080px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "1",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-4080px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-4760px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "1",
            });
        } else if (this.state.controlTranslate3d2 === "-4760px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-5440px, 0px, 0px",
                imgTransform1: "1",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
            setTimeout(this.LRightRe, 250);
            setTimeout(this.LRightRe2, 300);
        };
    };

    LogLeftClick = () => {
        if (this.state.controlTranslate3d2 === "-1360px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-680px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "1",
            });
            setTimeout(this.LLeftRe, 250);
            setTimeout(this.LLeftRe2, 300);
        } else if (this.state.controlTranslate3d2 === "-4760px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-4080px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "1",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-4080px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-3400px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "1",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-3400px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-2720px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "0.8",
                imgTransform3: "1",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-2720px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-2040px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "1",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
        } else if (this.state.controlTranslate3d2 === "-2040px, 0px, 0px") {
            this.setState({
                controlTranslate3d2: "-1360px, 0px, 0px",
                imgTransform1: "1",
                imgTransform2: "0.8",
                imgTransform3: "0.8",
                imgTransform4: "0.8",
                imgTransform5: "0.8",
                imgTransform6: "0.8",
            });
        };
    };

    rememberRightClick = () => {
        if (this.state.controlTranslate3d3 === "0px, 0px, 0px") {
            this.setState({
                controlTranslate3d3: "-680px, 0px, 0px",
                imgTransform1: "0.8",
                imgTransform2: "1",
            });
        }
    };

    rememberLeftClick = () => {
        if (this.state.controlTranslate3d3 === "-680px, 0px, 0px") {
            this.setState({
                controlTranslate3d3: "0px, 0px, 0px",
                imgTransform1: "1",
                imgTransform2: "0.8",
            });
        }
    };

    render(){
        const { imgTransition } = this.state;

        const transitionStyle = {
            transition: imgTransition,
        }

        return (
            <div className="galleryContainer" >
                <div className="gralleryHeader" >
                    <ul className="gHeaderUl" >
                        <li className="gHeaderLi" >
                            <GHeaderA
                                id="a1"
                                a1
                                className="a1"
                                bGPosition1={this.state.backgroundPositionA1}
                                bfPosition1={this.state.beforePosition1}
                                onClick={this.a1Click}
                            />
                        </li>
                        <li className="gHeaderLi" >
                            <GHeaderA
                                a2
                                className="a2"
                                bGPosition2={this.state.backgroundPositionA2}
                                bfPosition2={this.state.beforePosition2}
                                onClick={this.a2Click}
                            />
                        </li>
                        <li className="gHeaderLi" >
                            <GHeaderA
                                a3
                                className="a3"
                                bGPosition3={this.state.backgroundPositionA3}
                                bfPosition3={this.state.beforePosition3}
                                onClick={this.a3Click}
                            />
                        </li>
                    </ul>
                </div>
                <div className="galleryMain" >
                    <GMainDiv birth DivDisplay1={this.state.mainDivDisplay1} >
                        <div className="slider" >
                            <div className="sliderList" >
                                <SliderTrack SliderTrack1 control translate={this.state.controlTranslate3d1} style={transitionStyle} >
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth06_pc.jpg" alt imgTF6 transform6={this.state.imgTransform6} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth07_pc.jpg" alt imgTF7 transform7={this.state.imgTransform7} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth01_pc.jpg" alt imgTF1 transform1={this.state.imgTransform1} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth02_pc.jpg" alt imgTF2 transform2={this.state.imgTransform2} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth03_pc.jpg" alt imgTF3 transform3={this.state.imgTransform3} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth04_pc.jpg" alt imgTF4 transform4={this.state.imgTransform4} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth05_pc.jpg" alt imgTF5 transform5={this.state.imgTransform5} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth06_pc.jpg" alt imgTF6 transform6={this.state.imgTransform6} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth07_pc.jpg" alt imgTF7 transform7={this.state.imgTransform7} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth01_pc.jpg" alt imgTF1 transform1={this.state.imgTransform1} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth02_pc.jpg" alt imgTF2 transform2={this.state.imgTransform2} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth03_pc.jpg" alt imgTF3 transform3={this.state.imgTransform3} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth04_pc.jpg" alt imgTF4 transform4={this.state.imgTransform4} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth05_pc.jpg" alt imgTF5 transform5={this.state.imgTransform5} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth06_pc.jpg" alt imgTF6 transform6={this.state.imgTransform6} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_birth07_pc.jpg" alt imgTF7 transform7={this.state.imgTransform7} />
                                    </div>
                                </SliderTrack>
                            </div>
                        </div>
                        <div className="control" >
                            <ControlArrow
                                controlLeft
                                onClick={this.BirthLeftClick}
                            />
                            <ControlArrow
                                controlRight
                                onClick={this.BirthRightClick}
                            />
                        </div>
                    </GMainDiv>
                    <GMainDiv log DivDisplay2={this.state.mainDivDisplay2} >
                        <div className="slider" >
                            <div className="sliderList" >
                                <SliderTrack SliderTrack2 control translate={this.state.controlTranslate3d2} style={transitionStyle} >
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log05_pc.jpg" alt imgTF5 transform5={this.state.imgTransform5} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log06_pc.jpg" alt imgTF6 transform6={this.state.imgTransform6} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log01_pc.jpg" alt imgTF1 transform1={this.state.imgTransform1} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log02_pc.jpg" alt imgTF2 transform2={this.state.imgTransform2} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log03_pc.jpg" alt imgTF3 transform3={this.state.imgTransform3} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log04_pc.jpg" alt imgTF4 transform4={this.state.imgTransform4} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log05_pc.jpg" alt imgTF5 transform5={this.state.imgTransform5} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log06_pc.jpg" alt imgTF6 transform6={this.state.imgTransform6} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log01_pc.jpg" alt imgTF1 transform1={this.state.imgTransform1} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log02_pc.jpg" alt imgTF2 transform2={this.state.imgTransform2} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log03_pc.jpg" alt imgTF3 transform3={this.state.imgTransform3} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log04_pc.jpg" alt imgTF4 transform4={this.state.imgTransform4} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log05_pc.jpg" alt imgTF5 transform5={this.state.imgTransform5} />
                                    </div>
                                    <div className="galleryImgBox" >
                                        <SliderImg src="img_log06_pc.jpg" alt imgTF6 transform6={this.state.imgTransform6} />
                                    </div>
                                </SliderTrack>
                            </div>
                        </div>
                        <div className="control" >
                            <ControlArrow
                                controlLeft
                                onClick={this.LogLeftClick}
                            />
                            <ControlArrow
                                controlRight
                                onClick={this.LogRightClick}
                            />
                        </div>
                    </GMainDiv>
                    <GMainDiv remember DivDisplay3={this.state.mainDivDisplay3} >
                        <div className="slider" >
                            <div className="sliderList" >
                            <SliderTrack SliderTrack3 control translate={this.state.controlTranslate3d3} >
                                <div className="galleryImgBox" >
                                    <SliderImg src="img_remember01_pc.jpg" alt imgTF1 transform1={this.state.imgTransform1} />
                                </div>
                                <div className="galleryImgBox" >
                                    <SliderImg src="img_remember02_pc.jpg" alt imgTF2 transform2={this.state.imgTransform2} />
                                </div>
                            </SliderTrack>
                            </div>
                        </div>
                        <div className="control" >
                            <ControlArrow
                                controlLeft
                                onClick={this.rememberLeftClick}
                            />
                            <ControlArrow
                                controlRight
                                onClick={this.rememberRightClick}
                            />
                        </div>
                    </GMainDiv>
                </div>
            </div>
        );
    }
}

const GHeaderA = styled.a`
    padding: 10px 14px;
    display: inline-block;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    
    ${props => {
        if (props.a1) {
            return `
                &::after {
                    content: "";
                    display: inline-block;
                    overflow: hidden;
                    position: relative;
                    height: 24px;
                    background-image: url('text_gallerytab_mobile.png');
                    background-size: 200px 85px;
                    background-repeat: no-repeat
                    background-position: ${props.bGPosition1};
                    width: 60px;
                    height: 41px;
                }
                &::before {
                    content: "";
                    position: ${props.bfPosition1};
                    left: 0;
                    right: 0;
                    bottom: 7px;
                    height: 11px;
                    background: #ffd725;
                };
            `;
        } else if (props.a2) {
            return `
                &::after {
                    content: "";
                    display: inline-block;
                    overflow: hidden;
                    position: relative;
                    height: 24px;
                    background-image: url('text_gallerytab_mobile.png');
                    background-size: 200px 85px;
                    background-repeat: no-repeat
                    background-position: ${props.bGPosition2};
                    width: 38px;
                    height: 41px;
                }
                &::before {
                    content: "";
                    position: ${props.bfPosition2};
                    left: 0;
                    right: 0;
                    bottom: 7px;
                    height: 11px;
                    background: #ffd725;
                };
            `;
        } else if (props.a3) {
            return `
                &::after {
                    content: "";
                    display: inline-block;
                    overflow: hidden;
                    position: relative;
                    height: 24px;
                    background-image: url('text_gallerytab_mobile.png');
                    background-size: 200px 85px;
                    background-repeat: no-repeat
                    background-position: ${props.bGPosition3};
                    width: 102px;
                    height: 41px;
                }
                &::before {
                    content: "";
                    position: ${props.bfPosition3};
                    left: 0;
                    right: 0;
                    bottom: 7px;
                    height: 11px;
                    background: #ffd725;
                };
            `;
        };
    }};
`;

const GMainDiv = styled.div`
    ${props => {
        if (props.birth) {
            return `
                display: ${props.DivDisplay1};
            `;
        } else if (props.log) {
            return `
                display: ${props.DivDisplay2};
            `;
        } else if (props.remember) {
            return `
                display: ${props.DivDisplay3};
            `;
        }
    }};
`;

const SliderTrack = styled.div`
    opacity: 1;
    transition: 0.6s;
    position: relative;
    top: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    ${props => {
        if (props.SliderTrack1) {
            return `
                width: 10880px;
            `;
        } else if (props.SliderTrack2) {
            return `
                width: 9520px;
            `;
        } else if (props.SliderTrack3) {
            return `
                width: 1360px;
            `;
        }
    }};
    ${props => {
        if (props.control) {
            return `
                transform: translate3d(${props.translate});
            `;
        }
    }};
    &::before {
        display: table;
        content: '';
    };
    &::after {
        clear: both;
        display: table;
        content: '';
    };
`;

const SliderImg = styled.img`
    // transition: transform 0.4s;
    width: 100%;
    display: block !important;
    border: 0 none;
    outline: none;
    ${props => {
        if (props.imgTF1) {
            return `
            transform: scale(${props.transform1});
            `;
        } else if (props.imgTF2) {
            return `
                transform: scale(${props.transform2});
            `;
        } else if (props.imgTF3) {
            return `
                transform: scale(${props.transform3});
            `;
        } else if (props.imgTF4) {
            return `
                transform: scale(${props.transform4});
            `;
        } else if (props.imgTF5) {
            return `
                transform: scale(${props.transform5});
            `;
        } else if (props.imgTF6) {
            return `
                transform: scale(${props.transform6});
            `;
        } else if (props.imgTF7) {
            return `
                transform: scale(${props.transform7});
            `;
        }
    }};
`;

const ControlArrow = styled.button`
    display: inline-block;
    width: 84px;
    height: 18px;
    background-image: url('/btn_arrow_carousel.png');
    background-repeat: no-repeat;
    border: 0 none;
    vertical-align: middle;
    background-color: #f1f3f5;
    cursor: pointer;
    outline: none;
    ${props => {
        if (props.controlLeft) {
            return `
                margin-right: 125px;
                background-position: 0 0;
            `;
        } else if (props.controlRight) {
            return `
                background-position: 0 -22px;
            `;
        }
    }};
`;

export default Gallery;