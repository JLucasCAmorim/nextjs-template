/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import BaseLayout from '../components/layouts'
import Typed from 'react-typed'

const ROLES = ['Developer', 'Tech Lover', 'React Lover', 'Node <3']

const Home: React.FC = () => {
  return (
    <BaseLayout>
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className="flipper">
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img className="image" src="/images/section-2.png" />
                    <div className="shadow-custom-2">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>Welcome to John's Portfolio Website</h1>
                <h3>
                  Get informed, collaborate and discover projects I was working
                  on through the years!
                </h3>
              </div>
              <Typed
                loop
                strings={ROLES}
                typeSpeed={70}
                backSpeed={70}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  )
}

export default Home
