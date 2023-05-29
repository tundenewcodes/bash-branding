import { Col } from "react-bootstrap";

import HeaderText from "../../utils/HeaderText";
import Subtitle from "../../utils/Subtitle";

const ColOne = () => {
  return (
    <Col xs={12} md={6} lg={6}>
      <div className="col-one">
        <HeaderText text={"YOU CAN SEND ME A MESSAGE HERE"} />
        <Subtitle
          text={
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis etiam viverra vulputate euismod varius netus. Sollicitudin netus porttitor sagittis taciti taciti fermentum. Parturient per est leo nulla varius. Lobortis erat varius lectus; nibh lobortis ante etiam. Dolor class sodales maximus bibendum primis libero ultrices. Suspendisse ultrices at metus fringilla; mauris nascetur. Ex sapien massa sapien magnis eros auctor torquent. Libero dolor aenean netus elit class vestibulum class."
          }
        />
      </div>
    </Col>
  );
};

export default ColOne;
