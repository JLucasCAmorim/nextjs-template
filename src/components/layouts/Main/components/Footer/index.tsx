import React from 'react'

// reactstrap components
import { Row, Col } from 'reactstrap'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{' '}
            <a
              className="font-weight-bold ml-1"
              href="https://www.creative-tim.com?ref=njsad-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              John Amorim
            </a>
          </div>
        </Col>

        <Col xl="6"></Col>
      </Row>
    </footer>
  )
}

export default Footer
