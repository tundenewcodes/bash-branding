import Line from "../../utils/Line";
import { Col, Container, Row } from "react-bootstrap";
import ColOne from "./ColOne";
import ColTwo from "./ColTwo";
import "./project.css";

import { SelectedLink } from "../../utils/navlinks";
import MotionDiv from "../../utils/MotionDiv";

const Projects = ({ setSelectedPage }) => {
  return (
    <section id="Journey">
      <MotionDiv setSelectedPage={() => setSelectedPage(SelectedLink.Journey)}>
        <Container
          className=" mx-auto"
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          <Line text={"My Business"} />

          <Row
            className="justify-content-center align-items-center "
            style={{
              padding: "10px",
              minHeight: "100vh",
              width: "100%",
              margin: "auto",
            }}
          >
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 1 }}
              style={{
                padding: "0",
              }}
            >
              <ColOne />
            </Col>

            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6 }}
              style={{
                padding: "0",
              }}
            >
              <ColTwo />
            </Col>
          </Row>
        </Container>
      </MotionDiv>
    </section>
  );
};

export default Projects;
