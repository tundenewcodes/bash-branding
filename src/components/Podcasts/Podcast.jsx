import { Col, Container, Row } from "react-bootstrap";
import ColOne from "./ColOne";
import ColTwo from "./ColTwo";

import "./Podcast.css";

import { SelectedLink } from "../../utils/navlinks";
import Header from "../bio/components/Header";
import MotionDiv from "../../utils/MotionDiv";

const Podcast = ({ setSelectedPage }) => {
  return (
    <section id="Podcast">
     <MotionDiv setSelectedPage={() => setSelectedPage(SelectedLink.Podcast)}>
     <Container
          className=" mx-auto main-div"
        
        >
          <Row
           
          className="row-div"
          >
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
              className="d-none d-md-block"
            >
              <ColTwo />
            </Col>
          </Row>
          <Header  selectedPage={SelectedLink.Podcast} setSelectedPage={setSelectedPage}  />
        </Container>
     </MotionDiv>
       

    </section>
  );
};

export default Podcast;
