import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class GlobalNav extends Component{
    render() {
        const { isScrolling } = this.props;

        return(
            <Fragment>
                <GNavBox1 className="box1" >
                    <GNav isScrolling={isScrolling} first >브랜드 소개</GNav>
                    <GNav isScrolling={isScrolling} seconsd >인프라</GNav>
                    <GNav isScrolling={isScrolling} third >상품안내</GNav>
                    <GNav isScrolling={isScrolling} fourth >고객지원서비스</GNav>
                    <GNav isScrolling={isScrolling} last >홍보센터</GNav>
                </GNavBox1>
                <GNavBox2 className="box2">
                    <GNav2Inner>
                        <GNav2Ul ul1 >
                            <GNav2Li>미미 소개</GNav2Li>
                            <GNav2Li>사업 소개</GNav2Li>
                        </GNav2Ul>
                        <GNav2Ul ul2 >
                            <GNav2Li>물류시스템</GNav2Li>
                            <GNav2Li>식품안전센터</GNav2Li>
                            <GNav2Li>식품연구소</GNav2Li>
                            <GNav2Li>셰프플라자</GNav2Li>
                            <GNav2Li>OMS시스템</GNav2Li>
                        </GNav2Ul>
                        <GNav2Ul ul3 >
                            <GNav2Li>상품 소개</GNav2Li>
                            <GNav2Li>미미 PB상품</GNav2Li>
                            <GNav2Li>산지직거래 상품</GNav2Li>
                            <GNav2Li>글로벌 구매 네트워크</GNav2Li>
                        </GNav2Ul>
                        <GNav2Ul ul4 >
                            <GNav2Li>고객지원서비스 소개</GNav2Li>
                            <GNav2Li>셰프 레시피</GNav2Li>
                            <GNav2Li>메뉴 원가계산기</GNav2Li>
                            <GNav2Li>미미 세미나</GNav2Li>
                            <GNav2Li>서식창고</GNav2Li>
                            <GNav2Li>미미 매거진</GNav2Li>
                        </GNav2Ul>
                        <GNav2Ul ul5 >
                            <GNav2Li>보도자료</GNav2Li>
                            <GNav2Li>공지사항</GNav2Li>
                            <GNav2Li>이벤트</GNav2Li>
                        </GNav2Ul>
                    </GNav2Inner>
                </GNavBox2>
                <GNavBox0 className="box0" isScrolling={isScrolling} >
                </GNavBox0>
            </Fragment>
        );
    }
}

const GNavBox0 = styled.div`
    content: "";
    display: none;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin-top: ${props => (props.isScrolling ? `51px;` : `0;`)};
`;

const GNavBox1 = styled.span`
    display: inline-block;
    margin-left: 180px;
    height: 50px;
    line-height: 2;
    text-align: center;
    &:hover~.box2{
        height: 315px;
    };
    &:hover~.box0{
        display: block;
    };
`;

const GNav = styled.div`
    display: inline-block;
    font-size: 18px;
    height: 50px;
    width: auto;
    text-align: center;
    cursor: pointer;
    line-height: 76px;
    font-weight: 600;
    ${props => {
        if(props.isScrolling){
            return `color: black;`;
        } else {
            return `color: white;`;
        }
    }};

    ${props => {
        if(props.isScrolling){
            if(props.first){
                return `
                padding-left: 20px;
                `;
            } else if(props.last){
                return `
                    padding-right: 20px;
                `;
            };
        } else {
            if(props.first){
                return `
                border-left: 1px solid rgba(218, 218, 218, 0.5);
                padding-left: 20px;
                `;
            } else if(props.last){
                return `
                    border-right: 1px solid rgba(218, 218, 218, 0.5);
                    padding-right: 20px;
                `;
            };
        }
    }};

    ${props => {
        if(props.first){
            return `margin-left: 0px;`;
        } else if (props.seconsd) {
            return `margin-left: 90px;`;
        } else if (props.third) {
            return `margin-left: 120px;`;
        } else if (props.fourth) {
            return `margin-left: 135px;`;
        } else if (props.last) {
            return `margin-left: 120px;`;
        };
    }};

    &:hover{
        opacity: 0.5;
    };
`;

const GNavBox2 = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 0;
    transition: height 0.5s;
    background: #fff;
    overflow: hidden;
    z-index: 5;
    &:hover{
        height: 315px;
    };
    &:hover~.box0{
        display: block;
    }
`;

const GNav2Inner = styled.div`
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 36px 50px 0;
    box-sizing: border-box;
    overflow: hidden;
`;

const GNav2Ul = styled.ul`
    list-style: none;
    float: left;
    ${props => {
        if(props.ul1){
            return `margin-left: 65px;`;
        } else if (props.ul2) {
            return `margin-left: 65px;`;
        } else if (props.ul3) {
            return `margin-left: 45px;`;
        } else if (props.ul4) {
            return `margin-left: 35px;`;
        } else if (props.ul5) {
            return `margin-left: 50px;`;
        };
    }};
`;

const GNav2Li = styled.li`
    text-align: left;
    margin-top: 17px;
    box-sizing: border-box;
    color: #555555;
    &:hover{
        color: #ce462e;
        cursor: pointer;
    }
`;

export default GlobalNav;