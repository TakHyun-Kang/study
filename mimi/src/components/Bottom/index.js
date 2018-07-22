import React, { Component } from 'react';
import styled from 'styled-components';

class Bottom extends Component {
    render(){
        return (
            <BottomArea>
                <BottomInner>
                    <BInnerNotice>
                        <BINoticeHeader>
                            <BINHeaderH2>공지사항</BINHeaderH2>
                            <BINHeaderA href="#" >더 보기 +</BINHeaderA>
                        </BINoticeHeader>
                        <BINoticeList>
                            <BINListLi>
                                <BINLLiA>
                                    [당첨자 발표] 2018년 6월 미미 리뉴얼...
                                </BINLLiA>
                                <BINLLiSpan>
                                    2018.06.15
                                </BINLLiSpan>
                            </BINListLi>
                            <BINListLi>
                                <BINLLiA>
                                    [미미] 앱 서비스 종료 안내
                                </BINLLiA>
                                <BINLLiSpan>
                                    2018.06.08
                                </BINLLiSpan>
                            </BINListLi>
                            <BINListLi>
                                <BINLLiA>
                                    [미미] 이용약관 변경 안내(5월 16일자로...
                                </BINLLiA>
                                <BINLLiSpan>
                                    2018.05.15
                                </BINLLiSpan>
                            </BINListLi>
                        </BINoticeList>
                    </BInnerNotice>
                    <BIMenuList>
                        <BIMenuLi BIMenuLi1 >
                            <BIMenuLiA href="#" icon1 >
                                셰프 계산기
                            </BIMenuLiA>
                        </BIMenuLi>
                        <BIMenuLi>
                            <BIMenuLiA href="#" icon2 >
                                셰프 1:1 문의
                            </BIMenuLiA>
                        </BIMenuLi>
                        <BIMenuLi>
                            <BIMenuLiA href="#" icon3 >
                                서식창고
                            </BIMenuLiA>
                        </BIMenuLi>
                        <BIMenuLi>
                            <BIMenuLiA href="#" icon4 >
                                이벤트
                            </BIMenuLiA>
                        </BIMenuLi>
                    </BIMenuList>
                </BottomInner>
            </BottomArea>
        )
    }
}

const BottomArea = styled.div`
    border-top: 1px solid #e4e4e4;
`;

const BottomInner = styled.div`
    width: 1180px;
    margin: 0 auto;
    padding: 34px 0 48px;
    overflow: hidden;
`;

const BInnerNotice = styled.section`
    float: left;
`;

const BINoticeHeader = styled.header`
    position: relative;
`;

const BINHeaderH2 = styled.h2`
    font-weight: 400;
    font-size: 22px;
    color: #555;
    margin: 0;
    display: inline-block;
`;

const BINHeaderA = styled.a`
    font-weight: 400;
    font-size: 14px;
    color: #555;
    text-decoration: none;
    margin-left: 280px;
`;

const BINoticeList = styled.ul`
    margin-top: 20px;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const BINListLi = styled.li`
    overflow: hidden;
`;

const BINLLiA = styled.a`
    display: block;
    float: left;
    width: 300px;
    height: 27px;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 27px;
    color: #807e7e;
    text-decoration: none;
`;

const BINLLiSpan = styled.span`
    display: block;
    float: left;
    width: 114px;
    font-size: 14px;
    height: 27px;
    letter-spacing: 0;
    line-height: 27px;
    color: #807e7e;
    text-align: right;
`;

const BIMenuList = styled.ul`
    float: left;
    margin: 20px 0 0 88px;
    list-style: none;
`;

const BIMenuLi = styled.li`
    margin-left: ${props => (props.BIMenuLi1 ? "0" : "70px")};
    float: left;
`;

const BIMenuLiA = styled.a`
    display: block;
    font-weight: 400;
    font-size: 21px;
    color: #555;
    text-decoration: none;

    &::before{
        content: "";
        display: block;
        height: 56px;
        margin: 0 auto 18px;
        background-image: url("icon_bottom.png");


        ${props => {
            if (props.icon1) {
                return `
                    width: 49px;
                    background-position: 0 0;
                `;
            } else if (props.icon2) {
                return `
                    width: 50px;
                    background-position: -54px 0;
                `;
            } else if (props.icon3) {
                return `
                    width: 47px;
                    background-position: -109px 0;
                `;
            } else if (props.icon4) {
                return `
                    width: 44px;
                    background-position: -161px 0;
                `;
            }
        }};
    }
`;

export default Bottom;