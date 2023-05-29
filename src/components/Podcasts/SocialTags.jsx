import React from "react";
import { useExport } from "../../hooks/useExport";
import Icons from "../Icons";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const SocialTags = () => {
  return (
    <div className="d-flex gap-4 " style={{flexWrap:'wrap'}}>
      <div className="d-flex justify-content-between flex-column align-items-center  my-4 " style={{flexWrap:'wrap'}}>
        <div className="d-flex gap-5 justify-content-center    cursor-pointer align-items-center my-2" >
          <div
            className="d-flex justify-content-center  cursor-pointer align-items-center"
            style={{
              height: "60px",
              width: "60px",
              backgroundColor: "#414141",
              borderRadius: "5px",
            }}
          >
            <Icons
              Icon={FaFacebookF}
              width={"3rem"}
              height={"3rem"}
              link=""
              color="#d1b34f"
            />
          </div>
          <p className="tag-text">Facebook</p>
        </div>

        <div className="d-flex gap-5 justify-content-center  cursor-pointer align-items-center my-2">
          <div
            className="d-flex justify-content-center  cursor-pointer align-items-center"
            style={{
              height: "60px",
              width: "60px",
              backgroundColor: "#414141",
              borderRadius: "5px",
            }}
          >
            <Icons
              Icon={FaInstagram}
              width={"3rem"}
              height={"3rem"}
              link=""
              color="#d1b34f"
              
            />
          </div>
          <p className="tag-text">Instagram</p>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center my-4  flex-column   " style={{flexWrap:'wrap'}}>
        <div className="d-flex gap-5 justify-content-center  cursor-pointer align-items-center my-2 ">
          <div
            className="d-flex justify-content-center  cursor-pointer align-items-center"
            style={{
              height: "60px",
              width: "60px",
              backgroundColor: "#414141",
              borderRadius: "5px",
            }}
          >
            <Icons
              Icon={FaTwitter}
              width={"3rem"}
              height={"3rem"}
              link=""
              color="#d1b34f"
            />
          </div>
          <p className="tag-text">Twitter</p>
        </div>

        <div className="d-flex gap-5 justify-content-center  cursor-pointer align-items-center my-2">
          <div
            className="d-flex justify-content-center  cursor-pointer align-items-center"
            style={{
              height: "60px",
              width: "60px",
              backgroundColor: "#414141",
              borderRadius: "5px",
            }}
          >
            <Icons
              Icon={FaLinkedinIn}
              width={"3rem"}
              height={"3rem"}
              link=""
              color="#d1b34f"
            />
          </div>
          <p className="tag-text">Linkedln</p>
        </div>
      </div>
    </div>
  );
};

export default SocialTags;
