import { Col } from "react-bootstrap";
import Button from "../../utils/Button";

const ColTwo = () => {
  return (
    <Col
      xs={12}
      md={6}
      lg={6}
      className=" justify-content-center align-items-center "
      style={{ height: "100%" }}
    >
      <form className="">
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className=" d-flex gap-4 m-4 " style={{ flexWrap: "wrap" }}>
            <div
              className="flex-grow-1"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label className="text-white">Name</label>
              <input type="text" name="name" className="form-col" placeholder="Name" />
            </div>

            <div
              className="flex-grow-1"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label className="text-white">Email</label>
              <input type="text" name="email" className="form-col" placeholder="Email" />
            </div>
          </div>

          <div className="d-flex  gap-4 m-4" style={{ flexWrap: "wrap" }}>
            <div
              className="flex-grow-1"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label className="text-white">Business Consultation</label>
              <input type="text" name="name" className="form-col" placeholder="Business Consultation" />
            </div>
            <div
              className="flex-grow-1"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label className="text-white">HR Tech</label>
              <input type="text" name="name" className="form-col"  placeholder="HR TECH" />
            </div>
            <div
              className="flex-grow-1"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label className="text-white">Era-Tek</label>
              <input
                type="text"
                name="email"
                className="form-col"
                placeholder="EraTek"
              />
            </div>
          </div>
          <div
            className="  m-4 "
            style={{ padding: "8px" }}
          >
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your text here"
              className="form-col w-100"
            ></textarea>
          </div>
         
        </div>
        <div style={{ padding: "8px" }} className=" m-4">
            <Button width={"170px"} text={"Drop a Message"} />
          </div>
      </form>
    </Col>
  );
};

export default ColTwo;
