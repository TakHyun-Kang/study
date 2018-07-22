import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Header from './components/Header';
import UpperMain from './components/UpperMain';
import Product from './components/Product';
import Infra from './components/Infra';
import Seminar from './components/Seminar';
import Recipe from './components/Recipe';
import Magazine from './components/Magazine';
import Bottom from './components/Bottom';
import Footer from './components/Footer';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <UpperContainer>
          <UpperMain />
        </UpperContainer>
        <ProductContainer>
          <Product />
        </ProductContainer>
        <InfraContainer>
          <Infra />
        </InfraContainer>
        <SeminarContainer>
          <Seminar />
        </SeminarContainer>
        <RecipeContainer>
          <Recipe />
        </RecipeContainer>
        <MagazineContainer>
          <Magazine />
        </MagazineContainer>
        <BottomContainer>
          <Bottom />
        </BottomContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    );
  }
}

const Container = styled.div`
`;

const UpperContainer = styled.div`
`;

const ProductContainer = styled.div`
`;

const InfraContainer = styled.div`
`;

const SeminarContainer = styled.div`
`;

const RecipeContainer = styled.div`
`;

const MagazineContainer = styled.div`
`;

const BottomContainer = styled.div`
`;

const FooterContainer = styled.div`
`;

export default App;
