import { Col, Container, Row } from "react-bootstrap";
import ColOne from "./ColOne";
import ColTwo from "./ColTwo";
import Header from "./components/Header";
import "./bio.css";

import { SelectedLink } from "../../utils/navlinks";
import MotionDiv from "../../utils/MotionDiv";

const Bio = ({ setSelectedPage }) => {
  return (
    <section id="Home">
      <MotionDiv setSelectedPage={() => setSelectedPage(SelectedLink.Home)}>
        <Container className=" mx-auto main-div">
          <Row className="row-div">
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              style={{
                padding: "0",
              }}
            >
              <ColOne />
            </Col>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              style={{
                padding: "0",
              }}
              className="d-none d-md-block "
            >
              <ColTwo />
            </Col>
          </Row>
          <Header showTray={true} selectedPage={SelectedLink.Home} setSelectedPage={setSelectedPage} />
        </Container>
      </MotionDiv>
    </section>
  );
};

export default Bio;
