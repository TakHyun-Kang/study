import React, { Component } from 'react';
import styled from 'styled-components';

class Infra extends Component{
    render(){
        return (
            <InfraBox>
                <InfraHeader>
                    <InfraH2>INFRA</InfraH2>
                    <InfraP>
                        미미의 인프라는 식품 안전성과 전문성을 위해 노력하고 있습니다.
                    </InfraP>
                </InfraHeader>
                <InfraUl>
                    <InfraLi hover1 >
                        <InfraHover>
                            <IHoverB className="bmar1" >
                                물류시스템
                            </IHoverB>
                            <IHoverP className="hovOpa1" >
                                미미는 선진화된 물류시스템으로<br/>
                                고객분들께 식자재를 안전하게<br/>
                                공급하고 있습니다.
                            </IHoverP>
                            <IHoverA href="#" className="hovOpa1" >
                                자세히 보기
                            </IHoverA>
                        </InfraHover>
                        <InfraImg img1 className="img1" >
                        </InfraImg>
                    </InfraLi>
                    <InfraLi hover2 >
                        <InfraHover>
                            <IHoverB className="bmar2" >
                                식품안전센터
                            </IHoverB>
                            <IHoverP className="hovOpa2" >
                                한발 앞선 엄격한 식품위생관리를<br/>
                                위해 식품안전센터가 최선을<br/>
                                다하고 있습니다.
                            </IHoverP>
                            <IHoverA href="#" className="hovOpa2" >
                                자세히 보기
                            </IHoverA>
                        </InfraHover>
                        <InfraImg img2 className="img2" >
                        </InfraImg>
                    </InfraLi>
                    <InfraLi hover3 >
                        <InfraHover>
                            <IHoverB className="bmar3" >
                                식품연구소
                            </IHoverB>
                            <IHoverP className="hovOpa3" >
                                고객에게 차별화 된 가치 제공과<br/>
                                경쟁력 우위의 신제품 개발을<br/>
                                위해 노력하고 있습니다.
                            </IHoverP>
                            <IHoverA href="#" className="hovOpa3" >
                                자세히 보기
                            </IHoverA>
                        </InfraHover>
                        <InfraImg img3 className="img3" >
                        </InfraImg>
                    </InfraLi>
                </InfraUl>
            </InfraBox>
        );
    }
}

const InfraBox = styled.div`
    width: 100%;
    padding: 120px 0 120px 0 !important;
    background: url("bg_infra.jpg") no-repeat center bottom;
`;

const InfraHeader = styled.header`
    position: relative;
    text-align: center;
`;

const InfraH2 = styled.h2`
    font-size: 30px;
    color: #231f20;
`;

const InfraP = styled.p`
    font-size: 16px;
    color: #807e7e;
    margin: 14px 0 50px 0;
`;

const InfraUl = styled.ul`
    width: 1180px;
    margin: 0 auto;
    overflow: hidden;
    list-style: none;
    padding-left: 0;
`;

const InfraLi = styled.li`
    float: left;
    position: relative;
    text-align: center;
    margin-left: 8px;
    ${props => {
        if (props.hover1) {
            return `
                margin-left: 0;
                &:hover .bmar1{
                    padding-top: 0;
                };
                &:hover .hovOpa1{
                    opacity: 1;
                };
                &:hover .img1::before{
                    opacity: 1;
                };
            `;
        } else if (props.hover2) {
            return `
                &:hover .bmar2{
                    padding-top: 0;
                };
                &:hover .hovOpa2{
                    opacity: 1;
                };
                &:hover .img2::before{
                    opacity: 1;
                };
            `;
        } else if (props.hover3) {
            return `
                &:hover .bmar3{
                    padding-top: 0;
                };
                &:hover .hovOpa3{
                    opacity: 1;
                };
                &:hover .img3::before{
                    opacity: 1;
                };
            `;
        }
    }};
`;

const InfraImg = styled.div`
    border-style: none;
    vertical-align: top;
    width: 385px;
    height: 385px;
    ${props => {
        if (props.img1) {
            return `
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: url('logistics.jpg');
                    background-size: cover;
                    opacity: 0.7;
                };
                &::before{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0.6;
                    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,1));
                };
            `;
        } else if (props.img2) {
            return `
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: url('food_1.jpg');
                    background-size: cover;
                    opacity: 0.7;
                };
                &::before{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0.8;
                    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,1));
                };
            `;
        } else if (props.img3) {
            return `
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: url('food_2.jpg');
                    background-size: cover;
                    opacity: 0.7;
                };
                &::before{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0.8;
                    background: linear-gradient(to top,rgba(0,0,0,1),rgba(0,0,0,1));
                };
            `;
        };
    }};
`;

const InfraHover = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 108px;
    box-sizing: border-box;
    background: rgba(0,0,0,0);
    transition: 0.6s;
    z-index: 1;
`;

const IHoverB = styled.b`
    position: relative;
    display: block;
    padding-top: 70px;
    font-size: 30px;
    color: #fff;
    font-weight: bolder;
    transition: 0.6s;
`;

const IHoverP = styled.p`
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    opacity: 0;
    transition: 0.6s;
`;

const IHoverA = styled.a`
    display: inline-block;
    width: 118px;
    height: 38px;
    margin-top: 32px;
    line-height: 38px;
    border: 1px solid rgba(255,255,255,1);
    color: rgba(255,255,255,1);
    background: rgba(255,255,255,0);
    border-radius: 2px;
    font-size: 14px;
    font-weight: 600;
    opacity: 0;
    transition: 0.6s;
    text-decoration: none;
`;

export default Infra;