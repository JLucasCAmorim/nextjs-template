import React from 'react'
import Nav from '../Nav'
import { Row, Col, Container } from 'reactstrap'
import {
  Header,
  HeaderWrapper,
  HeaderNav,
  HeaderTitle,
  HeaderTitleNote,
  HeaderPromo,
  HeaderImage,
} from './styles'

const Head: React.FC = () => {
  return (
    <Header>
      <HeaderWrapper>
        <Container fluid>
          <Row>
            <Col lg="12">
              <HeaderNav>
                <Nav />
              </HeaderNav>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <HeaderTitle>Coloque um titulo aqui !</HeaderTitle>
              <HeaderTitleNote>
                <p>
                  Admin and website templates built upon <b>Bootstrap</b>, and
                  <b> React</b>.
                </p>
              </HeaderTitleNote>
              <HeaderPromo>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </HeaderPromo>
            </Col>
            <Col lg="6">
              <HeaderImage>
                <img src="/images/promo.png" />
              </HeaderImage>
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>
    </Header>
  )
}

export default Head
