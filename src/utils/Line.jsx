
import { Col, Row } from 'react-bootstrap'

const Line = ({text}) => {
  return (
    <Row  className=" d-flex align-items-center   "  style={{marginBottom:'20px', marginTop:'20px'}} >
    <Col md={5} lg={5}  >
      <div
        className="border border-1 border-white  "
       
      ></div>
    </Col>
    <Col md={2} lg={2}  className=" text-center">
      <div  className="text-white">{text}</div>
    </Col>
    <Col md={5} lg={5}>
      <div
        className="border border-1 border-white"
       
      ></div>
    </Col>
  </Row>
  )
}

export default Line