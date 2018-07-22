import React, { Component } from 'react';
import './index.css';

import Waypoint from 'react-waypoint';

class Main extends Component {

    state = {
        visibility1: 'hidden',
        visibility2: 'hidden',
        opacity1: '0',
        opacity2: '0',
    }
    
    _handleScroll1 = () => {
        this.setState({
            visibility1: 'visible',
            opacity1: '1',
        });
    };

    _handleScroll2 = () => {
        this.setState({
            visibility2: 'visible',
            opacity2: '1',
        });
    };

    render() {

        const style1 = {
            visibility: this.state.visibility1,
            opacity: this.state.opacity1,
        }
        const style2 = {
            visibility: this.state.visibility2,
            opacity: this.state.opacity2,
        }

        return (
            <div>
                <div className="mainBGImg" />
                <div className="mainContentBox" >
                    <section className="mainUpper" >
                        <div className="mainUpperInner" >
                            <div className="mUInnerHeader" >
                                <h2 className="mUIHeaderH2" >Welcome to</h2>
                                <h1 className="mUIHeaderH1" >Seasoning school</h1>
                            </div>
                            <div className="mUIHeaderContentBox" >
                                <div className="mUIHeaderContent" >
                                    <p>
                                        Seasoning school is your online guide to enhancing flavours and utilising the best kitchen equipment. At Cole &amp; Mason, we understand how important it is to season food properly.
                                    </p>
                                    <p>
                                        The aim with seasoning is to enhance the food’s natural flavour, and the ability to do this properly is the single most important skill in cooking.
                                    </p>
                                </div>
                                <a href="#about" className="mUIHeaderContentA" >
                                    FIND OUT MORE
                                </a>
                            </div>
                        </div>
                    </section>
                    <main className="main" >
                        <section className="mainRecipes" >
                            <div className="mRContentBox" >
                                <div className="mRContentHeader" style={style1} >
                                    <div className="mRContentHeaderImg" >
                                        <div className="mRCHeaderTitle" >
                                            <h2 className="mRCHTitleInner" >Recipes</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="mRSaltMillBox" style={style1} >
                                    <div className="mRSMImgBox" >
                                        <img className="mRSaltMillImg" src="/image/salt_mill.jpg" alt="" />
                                        <div className="mRSMBoxImgOver" >
                                            <div className="mRSMBIOOuter" >
                                                <div className="mRSMBIOInner" >
                                                    <div className="mRSMBIOIContent" >
                                                        Derwent Gourmet Precision Acrylic and stainless Steel Salt Mill
                                                    </div>
                                                    <div className="mRSMBIOIBtnBox" >
                                                        <Waypoint onEnter={this._handleScroll1} >
                                                            <a href="#product" className="mRSMImgA" >
                                                                see the product
                                                            </a>
                                                        </Waypoint>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mRPotato" style={style2} >
                                    <div className="mRPOuter" >
                                        <div className="mRPInner" >
                                            <div className="mRPcontent" >
                                                <div className="mRPTextBox" >
                                                    <h3>New Potatoes with Lemon &amp; Nutmeg</h3>
                                                </div>
                                                <div className="mRPBtnBox" >
                                                    <Waypoint onEnter={this._handleScroll2} >
                                                        <a href="#potatorecipe" className="mRPBtn" >find out more</a>
                                                    </Waypoint>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mRAllRecipes" style={style2} >
                                    <div className="mRAROuter" >
                                        <div className="mRARInner" >
                                            <a href="#allRecipes" className="mRARBtn" >see all recipes</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mRText" style={style2} >
                                    <div className="mRTextImg" >
                                        <div className="mRTextInner" >
                                            <p>Always season food at the temperature it is going to be served at</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        );
    }
}

export default Main;