import HeaderText from "../../utils/HeaderText";
import Subtitle from "../../utils/Subtitle";

import SocialTags from "./SocialTags";

const ColOne = () => {
  return (
    <div className="col-one ">
      <HeaderText text={"Reach out to me on"} className='fs-1 text-capitalize' />
      <HeaderText text={"my social media handles"} className='fs-1 text-capitalize ' />
      <Subtitle
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore aliqua. Lorem ipsum dolor sit amet, conse. "
        }
      />

      <SocialTags/>
    </div>
  );
};

export default ColOne;
