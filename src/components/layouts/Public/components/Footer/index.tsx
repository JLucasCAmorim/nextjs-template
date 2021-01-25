import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import {
  FooterWrapper,
  FooterContainer,
  FooterCopyText,
  FooterLink,
  FooterSupportText,
  FooterContactsWrapper,
} from './styles'

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container fluid>
        <Row>
          <Col lg="12">
            <FooterContainer>
              <p>
                <FooterCopyText>
                  Copyright © 2021
                  <br /> | John Amorim | <FooterLink>Privacy Policy</FooterLink>
                </FooterCopyText>
              </p>
              <FooterContactsWrapper>
                <FooterSupportText>
                  Feel free to ask any questions!
                  <FooterLink href="mailto:support@cleanuitemplate.com">
                    support@cleanuitemplate.com
                  </FooterLink>
                </FooterSupportText>
              </FooterContactsWrapper>
            </FooterContainer>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
