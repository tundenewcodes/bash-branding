import { Col, Row } from "react-bootstrap";
import FCard from "./FCard";
import { useExport } from "../../hooks/useExport";

const ColTwo = () => {
  const { bacfLogo, eraconneck } = useExport();
  return (
    <Row>
      <Col className="d-flex justify-content-center align-items-center">
        <FCard
          imgSrc1={bacfLogo}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel veadipiscing elit. Mauris vel veLorem ipsum dolor sitMauris vel veLorem ipsum dolor sit"
          }
          text={"Visit website"}
        />
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        
          <FCard
            imgSrc1={eraconneck}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel veadipiscing elit. Mauris vel veLorem ipsum dolor sitMauris vel veLorem ipsum dolor sit"
            }
            text={"Visit website"}
          />

          <FCard
            imgSrc1={bacfLogo}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel veadipiscing elit. Mauris vel veLorem ipsum dolor sitMauris vel veLorem ipsum dolor sit"
            }
            text={"Visit website"}
          />
        
      </Col>
    </Row>
  );
};

export default ColTwo;
