import HeaderText from "../../utils/HeaderText";
import Subtitle from "../../utils/Subtitle";
import Button from "../../utils/Button";

const ColOne = () => {
  return (
    <div className="col-one ">
      <HeaderText text={"Hi, I AM "} />
      <HeaderText text={"BASHIRAT ARE"} />
      <Subtitle
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, conse. "
        }
      />

      <Button width='150px' text={"Get in Touch"} />
    </div>
  );
};

export default ColOne;
