/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import {
  Section,
  SectionTitle,
  SectionDescription,
  ServiceTitle,
  ServiceItem,
  ServiceItemTitle,
  ServiceItemText,
  ServiceImageContainer,
  ReviewItem,
  ReviewItemAuthor,
  ReviewItemPunch,
  ReviewItemQuote,
  ReviewItemRating,
  ReviewItemSource,
  ReviewItemWrapper,
} from '~/styles/pages/Home'
import { FiActivity } from 'react-icons/fi'

const Home: React.FC = () => {
  return (
    <Section>
      <Container fluid>
        <Row>
          <Col lg="12" className="mb-5">
            <SectionTitle className="text-center">
              Adicione um titulo
            </SectionTitle>
            <SectionDescription className="text-center mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </SectionDescription>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="mb-5">
            <ServiceTitle className="text-center">
              Tipos de Serviço
            </ServiceTitle>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="7">
            <Row>
              <Col lg="6" sm="6">
                <ServiceItem>
                  <FiActivity size="40" color="#5c6689" />
                  <Col lg="10" sm="10">
                    <ServiceItemTitle>Web App</ServiceItemTitle>
                    <ServiceItemText>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </ServiceItemText>
                  </Col>
                </ServiceItem>
              </Col>
              <Col lg="6" sm="6">
                <ServiceItem>
                  <FiActivity size="40" color="#5c6689" />
                  <Col lg="10" sm="10">
                    <ServiceItemTitle>Web App</ServiceItemTitle>
                    <ServiceItemText>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </ServiceItemText>
                  </Col>
                </ServiceItem>
              </Col>
            </Row>
            <Row>
              <Col lg="6" sm="6">
                <ServiceItem>
                  <FiActivity size="40" color="#5c6689" />
                  <Col lg="10" sm="10">
                    <ServiceItemTitle>Web App</ServiceItemTitle>
                    <ServiceItemText>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </ServiceItemText>
                  </Col>
                </ServiceItem>
              </Col>
              <Col lg="6" sm="6">
                <ServiceItem>
                  <FiActivity size="40" color="#5c6689" />
                  <Col lg="10" sm="10">
                    <ServiceItemTitle>Web App</ServiceItemTitle>
                    <ServiceItemText>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </ServiceItemText>
                  </Col>
                </ServiceItem>
              </Col>
            </Row>
          </Col>
          <Col lg="6" md="5" className="ctf-hire-img-content">
            <ServiceImageContainer>
              <img src="/images/image1.jpg" />
            </ServiceImageContainer>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="mb-5">
            <SectionTitle className="text-center">
              Avaliações de Clientes
            </SectionTitle>
            <SectionDescription className="text-center mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </SectionDescription>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <ReviewItem>
              <ReviewItemWrapper>
                <ReviewItemSource>
                  <ReviewItemAuthor>Benjamin Kouba,</ReviewItemAuthor>
                  LEAF9.com, United States
                </ReviewItemSource>
                <ReviewItemRating />
                <ReviewItemQuote>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                  </p>
                </ReviewItemQuote>
                <ReviewItemPunch>
                  It's new, but this one is definitely a winner!
                </ReviewItemPunch>
              </ReviewItemWrapper>
            </ReviewItem>
          </Col>
          <Col lg="4">
            <ReviewItem>
              <ReviewItemWrapper>
                <ReviewItemSource>
                  <ReviewItemAuthor>Benjamin Kouba,</ReviewItemAuthor>
                  LEAF9.com, United States
                </ReviewItemSource>
                <ReviewItemRating />
                <ReviewItemQuote>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                  </p>
                </ReviewItemQuote>
                <ReviewItemPunch>
                  It's new, but this one is definitely a winner!
                </ReviewItemPunch>
              </ReviewItemWrapper>
            </ReviewItem>
          </Col>
          <Col lg="4">
            <ReviewItem>
              <ReviewItemWrapper>
                <ReviewItemSource>
                  <ReviewItemAuthor>Benjamin Kouba,</ReviewItemAuthor>
                  LEAF9.com, United States
                </ReviewItemSource>
                <ReviewItemRating />
                <ReviewItemQuote>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                  </p>
                </ReviewItemQuote>
                <ReviewItemPunch>
                  It's new, but this one is definitely a winner!
                </ReviewItemPunch>
              </ReviewItemWrapper>
            </ReviewItem>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Home
