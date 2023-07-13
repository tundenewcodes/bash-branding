import { Container } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";
import { WorkData } from "../../../utils/data";
import SinglePageCard from "./SinglePageCard";
import "./singlepagecard.css";
import IconsTray from "../../../utils/IconsTray";
import { useExport } from "../../../hooks/useExport";

const SingleWork = () => {
  const { logo } = useExport();
  const { id } = useParams();
  const wdata = WorkData();

  const data = wdata[id];
  return (
    <section className="">
      <Container
        className=" mx-auto "
        style={{
          margin: "0",
          padding: "0",
          minWidth: "90%",
          height: "100%",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4 ">
          <Link to={'/'}>
          <img src={logo} />
          </Link>
         
          <IconsTray />
        </div>
        <SinglePageCard
          imgSrc={data?.imgSrc}
          text={data?.text1}
          title={data?.title}
          description={data?.description}
        />
      </Container>
    </section>
  );
};

export default SingleWork;
