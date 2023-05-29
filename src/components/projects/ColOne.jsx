import HeaderText from "../../utils/HeaderText";
import Subtitle from "../../utils/Subtitle";
import Button from "../../utils/Button";

const ColOne = () => {
  return (
    <div
      className="justify-content-center align-items-start  px-4 mb-5 "
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <HeaderText text={"Give a Header "} />
      <HeaderText text={"Here"} />
      <Subtitle
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, conse.  "
        }
      />

      <Button text={"Get in Touch"} />
    </div>
  );
};

export default ColOne;
