import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './index.css';

library.add(faAngleLeft, faAngleRight);

class UpperMain extends Component{
    state = {
        slideIndex: 0,
    };

    componentDidMount(){
        setInterval(this.nextSlides, 7000);
    }
    
    nextSlides = () => {
        if (this.state.slideIndex >= 2) {
            this.setState({
                slideIndex: 0
            });
        } else {
            this.setState({
                slideIndex: this.state.slideIndex + 1
            });
        }
    };

    prevSlides = () => {
        if (0 === this.state.slideIndex){
            this.setState({
                slideIndex: 2
            });
        } else {
            this.setState({
                slideIndex: this.state.slideIndex - 1
            });
        }
    };

    dotSlides = (e) => {
        if (e.target.className === 'dot1  sc-cSHVUG gBPDwc') {
            this.setState({
                slideIndex: 0
            });
        } else if (e.target.className === 'dot2  sc-cSHVUG gBPDwc') {
            this.setState({
                slideIndex: 1
            });
        } else if (e.target.className === 'dot3  sc-cSHVUG gBPDwc') {
            this.setState({
                slideIndex: 2
            });
        };
    };
    
    render(){
        return (
            <MainContainer>
                <MainInput pos1 id="pos1" type="radio" name="pos" defaultChecked />
                <MainInput pos2 id="pos2" type="radio" name="pos" />
                <MainInput pos3 id="pos3" type="radio" name="pos" />
                <MainUl>
                    <MainButton>
                        <FontAwesomeIcon onClick={this.prevSlides} className="angle_left" icon="angle-left" size="7x" />
                        <FontAwesomeIcon onClick={this.nextSlides} className="angle_right" icon="angle-right" size="7x" />
                    </MainButton>
                    <MainLi liKF li1 className={`mySlides ${this.state.slideIndex === 0 ? 'slideDis' : ''}`} >
                        <TextP textKF >
                            이슬이 방울방울맺힌 토마토 5개
                        </TextP>
                    </MainLi>
                    <MainLi liKF li2 className={`mySlides ${this.state.slideIndex === 1 ? 'slideDis' : ''}`} >
                        <TextP textKF>
                            아보카도, 토마토, 아스파라거스
                        </TextP>
                    </MainLi>
                    <MainLi liKF li3 className={`mySlides ${this.state.slideIndex === 2 ? 'slideDis' : ''}`} >
                        <TextP textKF>
                            당근인가? 홍당무인가? 이건 무엇인가
                        </TextP>
                    </MainLi>
                </MainUl>
                <MainP className="pos" >
                    <MainLabel onClick={this.dotSlides} className={`dot1 ${this.state.slideIndex === 0 ? 'dotBC' : ''}`} htmlFor="pos1" ></MainLabel>
                    <MainLabel onClick={this.dotSlides} className={`dot2 ${this.state.slideIndex === 1 ? 'dotBC' : ''}`} htmlFor="pos2" ></MainLabel>
                    <MainLabel onClick={this.dotSlides} className={`dot3 ${this.state.slideIndex === 2 ? 'dotBC' : ''}`} htmlFor="pos3" ></MainLabel>
                </MainP>
            </MainContainer>
        );
    }
}

const MainContainer = styled.div`
    border: 1px solid black;
    height: 800px;
    position: relative;
    overflow: hidden;
    margin-top: -52px;
`;

const MainInput = styled.input`
    display: none;
`;

const MainUl = styled.ul`
    list-style: none;
    width:100%;
    height:852px;
    transition:1s;
    padding-left: 0;
    margin-top: -52px;
    &:after{
        content:"";
        display:block;
        clear:both;
    };
    position: relative;
    margin: auto;
`;

const MainLi = styled.li`
    list-style: none;
    float:left;
    width:100%;
    height:100%;
    ${props => {
        if(props.li1){
            return `
                background-image: url("singsing.jpg");
                background-size: 100% 100%;
            `;
        } else if(props.li2){
            return `
                background-image: url("vegetables_1.jpg");
                background-size: 100% 100%;
            `;
        } else if(props.li3){
            return `
                background-image: url("vegetables_2.jpg");
                background-size: 100% 100%;
            `;
        }
    }};
    ${props => {
        if(props.liKF){
            return `animation: ${LiKF} 7s;`;
        }
    }};
`;
const LiKF = keyframes`
    from{
        transform: scale(1.1, 1.1);
    }
    to{
        transform: scale(1, 1);
    }
`;

const TextP = styled.p`
    margin-top: 350px;
    color: white;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    ${props => {
        if(props.textKF){
            return `animation: ${TextKF} 3s;`;
        }
    }};
`;
const TextKF = keyframes`
  from{
    transform: translate(0%, 50px);
    opacity: 0;
  }
  to{
    transform: translate(0%, 0px);
    opacity: 1;
  }
`;

const MainP = styled.p`
    text-align:center;
    position:absolute;
    bottom:10px;
    left:0;
    width:100%;
    text-align:center;
`;

const MainLabel = styled.label`
    display:inline-block;
    vertical-align:middle;
    width:10px;
    height:10px;
    border:2px solid white;
    transition:0.3s;
    border-radius:50%;
    cursor:pointer;
    margin-left: 10px;
`;

const MainButton = styled.div`
    position: absolute;
    z-index: 1;
    top: 437px;
    left: 50%;
    transform: translateX(-50%);
    width: 1180px;
`;

export default UpperMain;