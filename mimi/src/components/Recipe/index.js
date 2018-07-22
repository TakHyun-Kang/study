import React, { Component } from 'react';
import styled from 'styled-components';

class Recipe extends Component {
    render(){
        return (
            <RecipeArea>
                <RecipeHeader>
                    <RHeaderH2>
                        CHEF RECIPE
                    </RHeaderH2>
                    <RHeaderP>
                        미미 제품을 활용한 레시피 메뉴를 소개합니다.
                    </RHeaderP>
                    <RHeaderA href="#" >더 보기 +</RHeaderA>
                </RecipeHeader>
                <RecipeList>
                    <RListInner>
                        <RLInnerUl>
                            <RLInnerLi liFirst >
                                <RLILiInfo>
                                    <RLILiInfoImgBox>
                                        <RLILiInfoImg src="recipe_1.jpg" />
                                    </RLILiInfoImgBox>
                                    <RLILiInfoCategory categoryColor1 >제과제빵</RLILiInfoCategory>
                                    <RLILiInfoSort>디져트</RLILiInfoSort>
                                    <RLILiInfoP>슈 삼둥이</RLILiInfoP>
                                    <RLILiInfoMeun className="RLILiInfoMeun1" >
                                        <RLILiIMeunRecipe href="#" >
                                            레시피 자세히 보기
                                        </RLILiIMeunRecipe>
                                        <RLILiIMeunCaculator href="#" >
                                            메뉴원가계산기
                                        </RLILiIMeunCaculator>
                                        <RLILiIMeunCounsel href="#" >
                                            셰프 1:1 상담
                                        </RLILiIMeunCounsel>
                                    </RLILiInfoMeun>
                                </RLILiInfo>
                            </RLInnerLi>
                            <RLInnerLi liSecond >
                                <RLILiInfo>
                                    <RLILiInfoImgBox imgSecond >
                                        <RLILiInfoImg src="recipe_2.jpg" />
                                    </RLILiInfoImgBox>
                                    <RLILiInfoCategory categoryColor2 >양식</RLILiInfoCategory>
                                    <RLILiInfoSort>샐러드</RLILiInfoSort>
                                    <RLILiInfoP>토마토 파스타 샐러드</RLILiInfoP>
                                    <RLILiInfoMeun RLILiInfoMeun2 className="RLILiInfoMeun2" >
                                        <RLILiIMeunRecipe href="#" >
                                            레시피 자세히 보기
                                        </RLILiIMeunRecipe>
                                        <RLILiIMeunCaculator href="#" >
                                            메뉴원가계산기
                                        </RLILiIMeunCaculator>
                                        <RLILiIMeunCounsel href="#" >
                                            셰프 1:1 상담
                                        </RLILiIMeunCounsel>
                                    </RLILiInfoMeun>
                                </RLILiInfo>
                            </RLInnerLi>
                            <RLInnerLi liThird >
                                <RLILiInfo>
                                    <RLILiInfoImgBox>
                                        <RLILiInfoImg src="recipe_3.jpg" />
                                    </RLILiInfoImgBox>
                                    <RLILiInfoCategory categoryColor3 >중식</RLILiInfoCategory>
                                    <RLILiInfoSort>냉채류</RLILiInfoSort>
                                    <RLILiInfoP>우삼겹 겨자냉채</RLILiInfoP>
                                    <RLILiInfoMeun className="RLILiInfoMeun3" >
                                        <RLILiIMeunRecipe href="#" >
                                            레시피 자세히 보기
                                        </RLILiIMeunRecipe>
                                        <RLILiIMeunCaculator href="#" >
                                            메뉴원가계산기
                                        </RLILiIMeunCaculator>
                                        <RLILiIMeunCounsel href="#" >
                                            셰프 1:1 상담
                                        </RLILiIMeunCounsel>
                                    </RLILiInfoMeun>
                                </RLILiInfo>
                            </RLInnerLi>
                        </RLInnerUl>
                    </RListInner>
                </RecipeList>
            </RecipeArea>
        );
    }
}

const RecipeArea = styled.div`
    box-sizing: border-box;
    position: relative;
    padding: 82px 0 120px !important;
    overflow: hidden;
`;

const RecipeHeader = styled.header`
    position: relative;
    width: 1180px;
    text-align: center;
    margin: 0 auto;
`;

const RHeaderH2 = styled.h2`
    font-size: 30px;
    color: #231f20;
`;

const RHeaderP = styled.p`
    font-size: 18px;
    color: #807e7e;
    margin: 12px 0 50px 0;
`;

const RHeaderA = styled.a`
    position: absolute;
    top: 95px;
    right: 0;
    height: auto;
    color: #555;
    text-decoration: none;
`;

const RecipeList = styled.div`
`;

const RListInner = styled.div`
    width: 1042px;
    margin: 0 auto;
    overflow: hidden;
`;

const RLInnerUl = styled.ul`
    position: relative;
    height: 495px;
    margin: 20px auto 0;
    overflow: hidden;
    list-style: none;
    padding: 0;
`;

const RLInnerLi = styled.li`
    float: left;
    position: relative;
    width: 304px;
    height: 495px;
    margin-left: 65px;
    ${props => {
        if (props.liFirst) {
            return `
                margin-left: 0;
                &:hover .RLILiInfoMeun1{
                    display: block;
                };
            `;
        } else if (props.liSecond) {
            return `
                margin-top: 7px;
                &:hover .RLILiInfoMeun2{
                    display: block;
                };
            `;
        } else if (props.liThird) {
            return `
                margin-top: 7px;
                &:hover .RLILiInfoMeun3{
                    display: block;
                };
            `;
        }
    }};
`;

const RLILiInfo = styled.div`
    text-align: center;
`;

const RLILiInfoImgBox = styled.figure`
    border-radius: 10px;
    overflow: hidden;
    margin: 0;
    ${props => (props.imgSecond
                ? "position: absolute; margin-top: 155px;"
                : ""
                )};
`;

const RLILiInfoImg = RLILiInfoImgBox.withComponent('img').extend`
    vertical-align: top;
    border-style: none;
`;

const RLILiInfoCategory = styled.small`
    display: block;
    width: 104px;
    height: 28px;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    border-radius: 28px;
    margin: 28px auto 0;
    box-sizing: border-box;

    ${props => {
        if (props.categoryColor1) {
            return `
                color: #d0a82c;
                border: 1px solid #ebca76;
            `;
        } else if (props.categoryColor2) {
            return `
                color: #e10a00;
                border: 1px solid #e60800;
            `;
        } else if (props.categoryColor3) {
            return `
                color: #261000;
                border: 1px solid #3b2515;
            `;
        }
    }};
`;

const RLILiInfoSort = styled.small`
    display: inline-block;
    font-size: 16px;
    color: #949494;
    margin: 19px 0 8px;
`;

const RLILiInfoP = styled.p`
    font-size: 28px;
    color: #555;
    margin: 0;
`;

const RLILiInfoMeun = styled.div`
    display: none;
    position: absolute;
    left: 0;
    width: 100%;
    height: 327px;
    font-size: 0;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;

    ${props => {
        if (props.RLILiInfoMeun2) {
            return `
                top: 155px;
            `;
        } else {
            return `
                top: 0;
            `;
        }
    }};
`;

const RLILiIMeunRecipe = styled.a`
    width: 100%;
    height: 277px;
    font-weight: 600;
    font-size: 22px;
    line-height: 327px;

    position: relative;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #fff;
    box-sizing: border-box;
    background: none;
`;

const RLILiIMeunCaculator = styled.a`
    width: 50%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    background: rgba(255, 226, 207, 0.5);

    color: #fff;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

const RLILiIMeunCounsel = styled.a`
    width: 50%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-left: 1px solid #d0c9c4;
    background: rgba(255, 226, 207, 0.5);

    color: #fff;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

export default Recipe;