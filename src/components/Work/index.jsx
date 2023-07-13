import Card from "../../utils/Card";
import Line from "../../utils/Line";
import { Col, Container, Row } from "react-bootstrap";

import { SelectedLink } from "../../utils/navlinks";
import { WorkData } from "../../utils/data";
import MotionDiv from "../../utils/MotionDiv";

const Work = ({ setSelectedPage }) => {
  const workdata = WorkData();
  return (
    <section id="About">
      <MotionDiv setSelectedPage={() => setSelectedPage(SelectedLink.About)}>
        <Container
          className=" mx-auto"
          style={{
            margin: "0",
            padding: "0",
          }}
        >
          <Line text={"What I Do"} />

          <Row
            className=" justify-content-center align-items-center "
            style={{
             
              minHeight: "100vh",
              width: "100%",
              margin: "auto",
            }}
          >
            {workdata &&
              workdata.map((item, index) => (
                <Col
               
                  key={index}
                  xs={{ span: 12, order: 1 }}
                  md={{ span: 6, order: 1 }}
                  lg={{ span: 4, order: 1 }}
                  style={{
                    padding: "10px",
           
                  }}
                >

                    <Card
                      fSize={"36px"}
                      imgSrc={item.imgSrc}
                      text={item.text1}
                      title1={item.title}
                      urlLink={`/work/${item.id}`}
                    />
             
                </Col>
              ))}
          </Row>
        </Container>
      </MotionDiv>
    </section>
  );
};

export default Work;
