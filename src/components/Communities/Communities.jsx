import Card from "../../utils/Card";
import IconsTray from "../../utils/IconsTray";
import Line from "../../utils/Line";
import { Col, Container, Row } from "react-bootstrap";

import { SelectedLink } from "../../utils/navlinks";
import { CommunitiesData } from "../../utils/data";
import MotionDiv from "../../utils/MotionDiv";
import { Link } from "react-router-dom";




const Communities = ({ setSelectedPage }) => {
  const communitiesdata = CommunitiesData();
  return (
    <section id="Communities">
      <MotionDiv setSelectedPage={()=> setSelectedPage(SelectedLink.Communities)} >
        <Container
          className=" mx-auto"
          style={{
            margin: "0",
            padding: "0",
            position: "relative",
          }}
        >
          <Line text={"Communities"} />

          <Row
            className="justify-content-center align-items-center "
            style={{
              padding: "0",
              minHeight: "100vh",
              width: "100%",
              margin: "auto",
            }}
          >
            {communitiesdata &&
              communitiesdata.map((item, index) => (
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
                    fSize={"32px"}
                    imgSrc={item.imgSrc}
                    text={item.text1}
                    title1={item.title}
                    urlLink={`/community/${item.id}`}
                  />

               
                </Col>
              ))}
          </Row>
          <div className="d-flex justify-content-between" style={{
             padding: "10px",
          }}>
            <p className="text-white"  >
              Copyright © {new Date().getFullYear()} Bashirat Are | Designed by
              BACFInc
            </p>
            <IconsTray />
          </div>
        </Container>
      </MotionDiv>
    </section>
  );
};

export default Communities;
