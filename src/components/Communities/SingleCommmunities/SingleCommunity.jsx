import { Container } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";
import {  CommunitiesData } from "../../../utils/data";
import IconsTray from "../../../utils/IconsTray";
import { useExport } from "../../../hooks/useExport";
import SinglePageCard from "../../Work/SingleWork/SinglePageCard";

const SingleCommunity = () => {
  const { logo } = useExport();
  const { id } = useParams();
  const wdata = CommunitiesData();

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

export default SingleCommunity;
