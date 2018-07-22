import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {

    state = {
        display: "none"
    };

    clickDisplay = () => {
        if (this.state.display === "none") {
            this.setState({
                display: "block"
            });
        } else if (this.state.display === "block") {
            this.setState({
                display: "none"
            });
        };
    };

    render(){

        const style = {
            display: this.state.display
        }

        return (
            <FooterArea>
                <FooterA href="#" />
                <FooterInner>
                    <FInnerUl>
                        <FILiA href="#" FILiA1 >이용약관</FILiA>
                        <FILiA href="#" FILiA2 >개인정보취급방침</FILiA>
                        <FILiA href="#" >사이트맵</FILiA>
                    </FInnerUl>
                    <FISns>
                        <FISnsA href="#" FISnsA1 />
                        <FISnsA href="#" FISnsA2 />
                    </FISns>
                    <FIServe>
                        <FISUlLi FISUlLi1 >
                            <FISUlLiA href="http://www.qone.co.kr/" FISUlLiA1 />
                        </FISUlLi>
                        <FISUlLi>
                            <FISUlLiA href="https://www.sevensprings.co.kr/" FISUlLiA2 />
                        </FISUlLi>
                        <FISUlLi>
                            <FISUlLiA href="https://www.aboutmeshop.com/page/medianswer" FISUlLiA3 />
                        </FISUlLi>
                    </FIServe>
                    <FIFamily onClick={this.clickDisplay} >
                        <FIFamilyP>패밀리 사이트</FIFamilyP>
                        <FIFamilyUl style={style} >
                            <FIFamilyULi>
                                삼양그룹
                            </FIFamilyULi>
                            <FIFamilyULi>
                                <FIFamilyULiA href="http://www.samyang.com/" >
                                    삼양홀딩스
                                </FIFamilyULiA>
                            </FIFamilyULi>
                            <FIFamilyULi>
                                식품
                            </FIFamilyULi>
                            <FIFamilyULi>
                                <FIFamilyULiA href="http://www.samyangcorp.com/" >
                                    삼양사
                                </FIFamilyULiA>
                            </FIFamilyULi>
                            <FIFamilyULi>
                                <FIFamilyULiA href="http://www.sevensprings.co.kr/" >
                                    삼양에프엔비
                                </FIFamilyULiA>
                            </FIFamilyULi>
                            <FIFamilyULi>
                                브랜드
                            </FIFamilyULi>
                            <FIFamilyULi>
                                <FIFamilyULiA href="http://www.qone.co.kr/" >
                                    큐원
                                </FIFamilyULiA>
                            </FIFamilyULi>
                            <FIFamilyULi>
                                <FIFamilyULiA href="https://www.aboutmeshop.com/" >
                                    어바웃미
                                </FIFamilyULiA>
                            </FIFamilyULi>
                            <FIFamilyULi>
                                <FIFamilyULiA href="https://sfs.samyang.com/Main/Login.aspx" >
                                    OMS시스템
                                </FIFamilyULiA>
                            </FIFamilyULi>
                        </FIFamilyUl>
                    </FIFamily>
                    <FIAddress>
                        <FIAddressUl>
                            <FIAUlLi FIAUlLi1 >
                                (주) 미미사 : 미미도 미미시 미미구 미미로 310
                            </FIAUlLi>
                            <FIAUlLi>
                                일반문의 : 00-0000-0000
                            </FIAUlLi>
                            <FIAUlLi>
                                제품/상품 관련 문의 : 000-000-0000
                            </FIAUlLi>
                        </FIAddressUl>
                    </FIAddress>
                    <FICopyright>
                        COPYRIGHT 2018 SAMYANG CORP, ALL RIGHTS RESERVED
                    </FICopyright>
                </FooterInner>
            </FooterArea>
        );
    }
}

const FooterArea = styled.footer`
    position: relative;
    min-width: 1280px;
    height: 166px;
    font-family: 'Malgun Gothic', sans-serif;
    border-top: 1px solid #e4e4e4;
    box-sizing: border-box;
    background: #e7e7e9;
`;

const FooterA = styled.a`
    position: fixed;
    z-index: 99;
    bottom: 10%;
    right: 57px;
    width: 40px;
    height: 40px;
    text-indent: -9999px;
    background-image: url("btn_top.png");
`;

const FooterInner = styled.div`
    position: relative;
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 50px 45px;
    box-sizing: border-box;

    &::before{
        content: "MIMI";
        position: absolute;
        top: 44px;
        left: 60px;
        width: 89px;
        height: 34px;
        font-size: 35px;
        color: #666666;
    }
`;

const FInnerUl = styled.ul`
    margin: 0 0 0 135px;
    overflow: hidden;
    list-style: none;
    padding: 0;
`;

const FinnerLi = styled.li`
    float: left;
    line-height: 31px;
`;

const FILiA = FinnerLi.withComponent("a").extend`
    font-size: 14px;
    color: #807e7e;
    text-decoration: none;
    ${props => {
        if (!props.FILiA1) {
            return `
                &::before{
                    content: "";
                    display: inline-block;
                    width: 1px;
                    height: 15px;
                    vertical-align: middle;
                    margin: 0 15px;
                    background: #888687;
                }
            `;
        } else if (props.FILiA2) {
            return `
                font-weight: bolder;
            `;
        };
    }};
`;

const FISns = styled.div`
    position: absolute;
    top: 40px;
    right: 50px;
    font-size: 0;
`;

const FISnsA = styled.a`
    text-decoration: none;
    color: #555;
    ${props => {
        if (props.FISnsA1) {
            return `
                width: 32px;
                display: inline-block;
                height: 30px;
                background-image: url("footer_sns.png");
            `;
        } else if (props.FISnsA2) {
            return `
                margin-left: 15px;
                width: 30px;
                background-position-x: -47px;
                display: inline-block;
                height: 30px;
                background-image: url("footer_sns.png");
            `;
        }
    }};
`;

const FIServe = styled.div`
    position: absolute;
    top: 80px;
    right: 223px;
    width: 237px;
    height: 31px;
    background-image: url("footer_family.png");
    text-indent: -9999px;
    font-size: 0;
`;

const FIServeUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const FISUlLi = FIServeUl.withComponent('li').extend`
    float: left;
    ${props => {
        if (props.FISUlLi1) {
            return `margin-left: 46px;`;
        } else {
            return `margin-left: 15px;`;
        }
    }};
`;

const FISUlLiA = styled.a`
    display: block;
    height: 31px;
    text-decoration: none;
    color: #555;
    ${props => {
        if (props.FISUlLiA1) {
            return `width: 60px;`;
        } else if (props.FISUlLiA2) {
            return `width: 34px;`;
        } else if (props.FISUlLiA3) {
            return `width: 67px;`;
        }
    }};
`;

const FIFamily = styled.div`
    position: absolute;
    top: 76px;
    right: 50px;
    font-family: 'NanumSquare', sans-serif;
`;

const FIFamilyP = styled.p`
    width: 144px;
    height: 36px;
    font-weight: 600;
    font-size: 15px;
    line-height: 36px;
    padding-left: 15px;
    border: 1px solid #bfbfbf;
    border-radius: 1px;
    background-color: #fff;
    background-image: url("icon_footer_family_arrow.png");
    background-repeat: no-repeat;
    background-position: 115px center;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0;
`;

const FIFamilyUl = styled.ul`
    position: absolute;
    bottom: 35px;
    left: 0;
    width: 100%;
    border: 1px solid #bfbfbf;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const FIFamilyULi = styled.li`
    height: 32px;
    line-height: 32px;
    text-indent: 16px;
    font-weight: 600;
`;

const FIFamilyULiA = styled.a`
    display: block;
    padding-left: 9px;
    font-weight: 400;
    text-decoration: none;
    color: #555;
`;

const FIAddress = styled.address`
    color: #807e7e;
    margin-left: 135px;
    overflow: hidden;
    font-style: normal;
`;

const FIAddressUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const FIAUlLi = styled.li`
    float: left;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: -0.06em;
    ${props => {
        if (!props.FIAUlLi1) {
            return `
                &::before{
                    content: "";
                    display: inline-block;
                    width: 1px;
                    height: 11px;
                    vertical-align: middle;
                    margin: 0 8px;
                    background: #ededed;
                }
            `;
        }
    }};
`;

const FICopyright = styled.small`
    display: block;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.06em;
    color: #807e7e;
    margin-left: 135px;
`;

export default Footer;