import { Container, Row, Col } from "react-bootstrap";
import logoo from "../assets/img/logoo.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logoo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/spoorthy-madasu-b3765428b/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" style={{ width: '35px', height: '25px' }} />
              </a>
              <a href="https://leetcode.com/u/Spoorthy_Madasu/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="LeetCode Icon" style={{ width: '35px', height: '25px' }} />
              </a>
              <a href="https://github.com/Spoorthy1423" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="GitHub Icon" style={{ width: '35px', height: '25px' }} />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
