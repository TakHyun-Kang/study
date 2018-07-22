import React, { Component } from 'react';
import styled from 'styled-components';
import Clock from 'react-live-clock';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './index.css';
const categoryStyle = {
    '쿠킹클래스': '#e67878',
    '제과제빵': '#e6c378',
    default: '#949494',
};

library.add(faAngleLeft, faAngleRight);

class Seminar extends Component {
    state = {
        marginLeft: 0,
        // data: [
        //     {
        //         category: '쿠킹클래스',
        //         date: '2018.07.11',
        //         day: '수요일',
        //         subject: '[서울] 서브큐&일꾸오꼬알마 이탈리아 쿠킹클래스 5주...',
        //     },
        //     {
        //         category: '쿠킹클래스',
        //         date: '2018.07.10',
        //         day: '화요일',
        //         subject: '[서울] 서브큐&일꾸오꼬알마 이탈리아 쿠킹클래스 5주...',
        //     },
        //     {
        //         category: '제과제빵',
        //         date: '2018.07.04',
        //         day: '수요일',
        //         subject: '[서울] 서브큐&일꾸오꼬알마 이탈리아 쿠킹클래스 5주...',
        //     },
        //     {
        //         category: '쿠킹클래스',
        //         date: '2018.06.28',
        //         day: '목요일',
        //         subject: '[서울] 서브큐&일꾸오꼬알마 이탈리아 쿠킹클래스 5주...',
        //     },
        //     {
        //         category: '제과제빵',
        //         date: '2018.06.28',
        //         day: '목요일',
        //         subject: '[서울] 서브큐&일꾸오꼬알마 이탈리아 쿠킹클래스 5주...',
        //     },
        // ],
    };

    nextSlides = () => {
        if (this.state.marginLeft > -1105) {
            this.setState({
                marginLeft: this.state.marginLeft - 221
            });
        };
    };

    prevSlides = () => {
        if (this.state.marginLeft < 0) {
            this.setState({
                marginLeft: this.state.marginLeft + 221
            });
        };
    };
    
    render(){

        const style = {
            marginLeft: this.state.marginLeft
        };
        
        return (
            <SeminarBox>
                <SeminarHeader>
                    <SHeaderH2>
                        SEMINAR
                    </SHeaderH2>
                    <SHeaderP>
                        미미의 다양한 레시피와 노하우를 현장에서 직접 만나보세요.
                    </SHeaderP>
                </SeminarHeader>
                <SeminarP>TODAY
                    <SeminarPB>
                        <Clock format={' MM. DD'} />
                    </SeminarPB>
                </SeminarP>
                <SeminarPlus>
                    <SPlusA href="#">더보기 +</SPlusA>
                </SeminarPlus>
                <SeminarList>
                    <SListInner>
                        <SListUl className="SListUl" style={style} >
                            <SListLi firstLi >
                                <SListA href="#">
                                    <SListSmall cn='쿠킹클래스'>
                                        쿠킹클래스
                                    </SListSmall>
                                    <SListDateP cn='쿠킹클래스'>
                                        07.11
                                    </SListDateP>
                                    <SListDayP>
                                        수요일
                                    </SListDayP>
                                    <SListSub>
                                        [부산] 미미 &amp; 무띠(Mutti) 이탈리아 토마토요리 세미나
                                    </SListSub>
                                    <SListB cn='쿠킹클래스'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='쿠킹클래스'>
                                        쿠킹클래스
                                    </SListSmall>
                                    <SListDateP cn='쿠킹클래스'>
                                        07.10
                                    </SListDateP>
                                    <SListDayP>
                                        화요일
                                    </SListDayP>
                                    <SListSub>
                                        [대구] 미미 &amp; 무띠(Mutti) 이탈리아 토마토요리 세미나
                                    </SListSub>
                                    <SListB cn='쿠킹클래스'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='제과제빵'>
                                        제과제빵
                                    </SListSmall>
                                    <SListDateP cn='제과제빵'>
                                        07.04
                                    </SListDateP>
                                    <SListDayP>
                                        수요일
                                    </SListDayP>
                                    <SListSub>
                                        [서울(강북)] 2018년 9차 제과제빵 기술 세미나(강북)
                                    </SListSub>
                                    <SListB cn='제과제빵'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='default'>
                                        쿠킹클래스
                                    </SListSmall>
                                    <SListDateP cn='default'>
                                        06.28
                                    </SListDateP>
                                    <SListDayP>
                                        목요일
                                    </SListDayP>
                                    <SListSub>
                                        [서울] 미미 &amp; 일꾸오꼬알마 이탈리아 쿠킹클래스 5주 과정
                                    </SListSub>
                                    <SListB cn='default'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='default'>
                                        제과제빵
                                    </SListSmall>
                                    <SListDateP cn='default'>
                                        06.28
                                    </SListDateP>
                                    <SListDayP>
                                        목요일
                                    </SListDayP>
                                    <SListSub>
                                        [제주] 2018년 8차 제과제빵 기술 세미나
                                    </SListSub>
                                    <SListB cn='default'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='default'>
                                        제과제빵
                                    </SListSmall>
                                    <SListDateP cn='default'>
                                        06.21
                                    </SListDateP>
                                    <SListDayP>
                                        목요일
                                    </SListDayP>
                                    <SListSub>
                                        [인천] 2018년 7차 제과제빵 기술 세미나
                                    </SListSub>
                                    <SListB cn='default'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='default'>
                                        제과제빵
                                    </SListSmall>
                                    <SListDateP cn='default'>
                                        05.17
                                    </SListDateP>
                                    <SListDayP>
                                        목요일
                                    </SListDayP>
                                    <SListSub>
                                        [대구] 2018년 6차 제과제빵 기술 세미나
                                    </SListSub>
                                    <SListB cn='default'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='default'>
                                        제과제빵
                                    </SListSmall>
                                    <SListDateP cn='default'>
                                        05.10
                                    </SListDateP>
                                    <SListDayP>
                                        목요일
                                    </SListDayP>
                                    <SListSub>
                                        [서울(강남)] 2018년 5차 제과제빵 기술 세미나(강남)
                                    </SListSub>
                                    <SListB cn='default'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='default'>
                                        제과제빵
                                    </SListSmall>
                                    <SListDateP cn='default'>
                                        04.19
                                    </SListDateP>
                                    <SListDayP>
                                        목요일
                                    </SListDayP>
                                    <SListSub>
                                        [경기] 2018년 4차 제과제빵 기술 세미나
                                    </SListSub>
                                    <SListB cn='default'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                            <SListLi>
                                <SListA href="#">
                                    <SListSmall cn='default'>
                                        제과제빵
                                    </SListSmall>
                                    <SListDateP cn='default'>
                                        04.11
                                    </SListDateP>
                                    <SListDayP>
                                        수요일
                                    </SListDayP>
                                    <SListSub>
                                        [광주] 2018년 3차 제과제빵 기술 세미나
                                    </SListSub>
                                    <SListB cn='default'>
                                        모집 중
                                    </SListB>
                                </SListA>
                            </SListLi>
                        </SListUl>
                    </SListInner>
                    <SButtonArea>
                        <FontAwesomeIcon onClick={this.prevSlides} className="arrowLeft" icon="angle-left" size="7x" />
                        <FontAwesomeIcon onClick={this.nextSlides} className="arrowRight" icon="angle-right" size="7x" />
                    </SButtonArea>
                    <SPImgArea>
                        <SPlatingImg />
                    </SPImgArea>
                </SeminarList>
            </SeminarBox>
        );
    }
}

const SeminarBox = styled.div`
    box-sizing: border-box;
    position: relative;
    padding: 82px 0 120px !important;
    overflow: hidden;
`;

const SeminarHeader = styled.header`
    position: relative;
    width: 1180px;
    text-align: center;
    margin: 0 auto;
`;

const SHeaderH2 = styled.h2`
    font-size: 32px;
    color: #231f20;
`;

const SHeaderP = styled.p`
    font-size: 18px;
    color: #807e7e;
    margin: 10px 0 54px 0;
`;

const SeminarP = styled.p`
    font-size: 32px;
    color: #000;
    text-align: center;
`;

const SeminarPB = styled.b`
    font-weight: bolder;
`;

const SeminarPlus = styled.div`
    width: 1180px;
    margin: 0 auto;
    text-align: right;
`;

const SPlusA = styled.a`
    height: 24px;
    line-height: 24px;
    margin-right: 23px;
    font-size: 15px;
    text-decoration: none;
    color: #555;
`;

const SeminarList = styled.div`
`;

const SListInner = styled.div`
    width: 1105px;
    margin: 0 auto;
    overflow: hidden;
`;

const SListUl = styled.ul`
    width: 2210px;
    position: relative;
    font-weight: 600;
    overflow: hidden;
    list-style: none;
    padding-left: 0;
    transition: 0.6s;
`;

const SListLi = styled.li`
    float: left;
    position: relative;

    ${props => {
        if (props.firstLi) {
            return ``;
        } else {
            return `
                &::after{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 1px;
                    height: 227px;
                    background: #e8e8e8;
                }
            `;
        }
    }};
`;

const SListA = styled.a`
    display: block;
    width: 221px;
    height: 288px;
    padding: 10px 20px 0;
    box-sizing: border-box;
    text-decoration: none;
    color: #555;
`;

const SListSmall = styled.small`
    ${props => `background: ${categoryStyle[props.cn]}`};
    display: block;
    width: 120px;
    height: 24px;
    text-align: center;
    font-weight: 400;
    line-height: 27px;
    color: #fff;
    margin: 0 auto;
    border-radius: 24px;
    font-size: 16px;
`;

const SListDateP = styled.p`
    font-weight: 500;
    font-size: 60px;
    text-align: center;
    line-height: 84px;
    margin-top: 12px;
    margin-bottom: 0px;
    ${props => `color: ${categoryStyle[props.cn]}`};
`;

const SListDayP = styled.p`
    margin-top: 2px;
    font-size: 18px;
    text-align: center;
`;

const SListSub = styled.p`
    height: 44px;
    font-size: 16px;
    text-align: center;
    line-height: 22px;
    color: #555;
    margin-top: 22px;
    font-weight: 500;
`;

const SListB = styled.b`
    ${props => {
        if (props.cn === 'default') {
            return 'display: none;';
        } else {
            return `color: #ce462d;
            border: 1px solid #ce462d;
            display: block;
            width: 110px;
            height: 40px;
            font-size: 14px;
            text-align: center;
            line-height: 38px;
            margin: 27px auto 0;
            border-radius: 40px;
            box-sizing: border-box;`;
        }
    }};
`;

const SButtonArea = styled.div`
    position: absolute;
    z-index: 1;
    top: 440px;
    left: 52%;
    transform: translateX(-50%);
    width: 1300px;
`;

const SPImgArea = styled.div`
    position: absolute;
    left: 50%;
    top: 245px;
    width: 521px;
    height: 422px;
    margin-left: 560px;
`;

const SPlatingImg = styled.div`
    vertical-align: top;
    border-style: none;
    width: 521px;
    height: 422px;
    background-image: url("bg_seminar.png");
`;

export default Seminar;