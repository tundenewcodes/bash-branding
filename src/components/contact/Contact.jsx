import { Container, Row } from "react-bootstrap";
// import "./Journey.css";
import { SelectedLink } from "../../utils/navlinks";
import Line from "../Line";
import { motion } from "framer-motion";
import ColTwo from "./ColTwo";
import ColOne from "./ColOne";
import Icons from "../Icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./contact.css";
import IconsTray from "../../utils/IconsTray";
import MotionDiv from "../../utils/MotionDiv";

const Contact = ({ setSelectedPage }) => {
  return (
    <section style={{ height: "100%" }} id="Contact">
      <MotionDiv
        setSelectedPage={() => setSelectedPage(SelectedLink.ContactUs)}
      >
        <Container style={{ height: "100%" }}>
          <Line text={"Alternatively"} />
          <Row
            style={{ height: "100%", marginTop: "3rem" }}
            className="justify-content-center align-items-center "
          >
            <ColOne />
            <ColTwo />
          </Row>
          <div className="d-flex justify-content-between">
            <p className="text-white">
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

export default Contact;
