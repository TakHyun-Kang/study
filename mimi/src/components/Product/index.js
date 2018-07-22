import React, { Component } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faBook, faGlobe, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import './index.css';

library.add(faIndustry, faBook, faGlobe, faBirthdayCake);

class Product extends Component {
    render(){
        return (
            <ProductBox>
                <ProductHeader>
                    <PHeaderH2>
                        PRODUCT
                    </PHeaderH2>
                    <PHeaderP>
                        모두가 믿고 먹을 수 있는 다양한 제품군을 제공합니다.
                    </PHeaderP>
                </ProductHeader>
                <ProductUl>
                    <ProductLi slide1 >
                        <ProductImg img1 />
                        <ProductTextArea slide1 className="textArea1" >
                            <ProductText>가공식품</ProductText>
                            <FontAwesomeIcon className="icon" icon="industry" size="7x" />
                            <PTHoverArea className="slide1" >
                                <PTHAP>
                                    맛있는 음식을 위해 필요한<br/>
                                    좋은 재료를 제공합니다.
                                </PTHAP>
                                <PTHAA href="#">
                                    <PTHASpan>더 알아보기</PTHASpan>
                                </PTHAA>
                            </PTHoverArea>
                        </ProductTextArea>
                    </ProductLi>
                    <ProductLi slide2 >
                        <ProductImg img2 />
                        <ProductTextArea slide2 className="textArea2" >
                            <ProductText>미미 PB상품</ProductText>
                            <FontAwesomeIcon className="icon" icon="book" size="7x" />
                            <PTHoverArea className="slide2" >
                                <PTHAP>
                                    서큐브만의 노하우가 담긴<br/>
                                    PB상품을 제공합니다.
                                </PTHAP>
                                <PTHAA href="#">
                                    <PTHASpan>더 알아보기</PTHASpan>
                                </PTHAA>
                            </PTHoverArea>
                        </ProductTextArea>
                    </ProductLi>
                    <ProductLi slide3 >
                        <ProductImg img3 />
                        <ProductTextArea slide3 className="textArea3" >
                            <ProductText>글로벌 소싱 상품</ProductText>
                            <FontAwesomeIcon className="icon" icon="globe" size="7x" />
                            <PTHoverArea className="slide3" >
                                <PTHAP>
                                    고객님께 양질의<br/>
                                    해외 상품을 제공합니다.
                                </PTHAP>
                                <PTHAA href="#">
                                    <PTHASpan>더 알아보기</PTHASpan>
                                </PTHAA>
                            </PTHoverArea>
                        </ProductTextArea>
                    </ProductLi>
                    <ProductLi slide4 >
                        <ProductImg img4 />
                        <ProductTextArea slide4 className="textArea4" >
                            <ProductText>냉동 베이커리</ProductText>
                            <FontAwesomeIcon className="icon" icon="birthday-cake" size="7x" />
                            <PTHoverArea className="slide4" >
                                <PTHAP>
                                    간편하고 편리한<br/>
                                    냉동 베이커리를 소개합니다.
                                </PTHAP>
                                <PTHAA href="#">
                                    <PTHASpan>더 알아보기</PTHASpan>
                                </PTHAA>
                            </PTHoverArea>
                        </ProductTextArea>
                    </ProductLi>
                </ProductUl>
            </ProductBox>
        );
    }
}

const ProductBox = styled.div`
    margin-top: 80px;
    padding: 0 0 120px 0 !important;
`;

const ProductHeader = styled.header`
    position: relative;
    text-align: center;
`;

const PHeaderH2 = styled.h2`
    font-size: 30px;
    color: #231f20;
`;

const PHeaderP = styled.p`
    font-size: 16px;
    color: #807e7e;
    margin: 14px 0 50px 0;
`;

const ProductUl = styled.ul`
    font-size: 0;
    text-align: center;
    list-style: none;
    padding-left: 0;
`;

const ProductLi = styled.li`
    display: inline-block;
    position: relative;
    text-align: center;
    margin-left: 23px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);
    overflow: hidden;

    ${props => {
        if (props.slide1) {
            return `
                margin-left: 0;
                &:hover .slide1{
                    left: 0;
                };
                &:hover .textArea1::after{
                    margin-left: -40px;
                };
                &:hover .icon{
                    margin-left: -75px;
                };
            `;
        } else if (props.slide2) {
            return `
                &:hover .slide2{
                    left: 0;
                };
                &:hover .textArea2::after{
                    margin-left: -40px;
                };
                &:hover .icon{
                    margin-left: -75px;
                };
            `;
        } else if (props.slide3) {
            return `
                &:hover .slide3{
                    left: 0;
                };
                &:hover .textArea3::after{
                    margin-left: -40px;
                };
                &:hover .icon{
                    margin-left: -75px;
                };
                `;
        } else if (props.slide4) {
            return `
                &:hover .slide4{
                    left: 0;
                };
                &:hover .textArea4::after{
                    margin-left: -40px;
                };
                &:hover .icon{
                    margin-left: -75px;
                };
                `;
        }
    }};
`;

const ProductImg = styled.div`
    ${props => {
        if(props.img1){
            return `
                background-image: url("can.jpg");
            `;
        } else if(props.img2){
            return `
                background-image: url("market.jpg");
            `;
        } else if(props.img3){
            return `
                background-image: url("global.jpg");
            `;
        } else if(props.img4){
            return `
                background-image: url("bakery.jpg");
            `;
        };
    }};

    background-size: 227px 270px;
    width: 227px;
    height: 270px;
`;

const ProductTextArea = styled.div`
    position: relative;
    height: 190px;
    padding: 32px 0 0 0;
    background: #fff;
    box-sizing: border-box;

    &::after{
        content: '';
        display: block;
        width: 14%;
        height: 1px;
        margin-left: 97px;
        background: #D4D3D4;
        transition: 0.6s;
    }
`;

const ProductText = styled.b`
    font-size: 22px;
    text-align: center;
    color: #231f20;
    font-weight: bolder;
`;

const PTHoverArea = styled.div`
    position: absolute;
    left: 230px;
    bottom: 0;
    width: 100%;
    color: #000;
    font-size: 16px;
    transition: 0.6s;

    &::after{
        content: '';
        display: block;
        width: 100%;
        height: 6px;
        background: #ee3124;
        transition: 0.6s;
    }
`;

const PTHAP = styled.p`
    position: relative;
    font-size: 16px;
    line-height: 24px;
    transition: 0.6s;
`;

const PTHAA = styled.a`
    position: relative;
    margin-top: 14px;
    display: block;
    font-size: 14px;
    line-height: 54px;
    transition: 0.6s;
    color: #555;
`;

const PTHASpan = styled.span`
    position: relative;
    display: inline-block;
    padding-right: 17px;

    &::after{
        content: '>';
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -26px;
        display: block;
        width: 7px;
        height: 11px;
        font-weight: bold;
        font-size: 30px;
        color: #D4D3D4;
    };
`;

export default Product;