import {
    FaFacebookF,
    FaInstagram,
  
    FaLinkedinIn,
    FaTwitter,
  } from "react-icons/fa";
import Icons from "../components/Icons";

const IconsTray = () => {
  return (
    <div className="d-flex gap-3">
        <Icons Icon={FaFacebookF}    width={'20px'} height={'20px'} link="" color={'white'} />
        <Icons Icon={FaInstagram}    width={'20px'} height={'20px'} link="" color={'white'} />
        <Icons Icon={FaLinkedinIn}    width={'20px'} height={'20px'} link=""  color={'white'} />
        <Icons Icon={FaTwitter}    width={'20px'} height={'20px'} link=""  color={'white'} />
      </div>
  )
}

export default IconsTray