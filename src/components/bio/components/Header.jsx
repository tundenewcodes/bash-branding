import { Link } from "react-router-dom";
import { useExport } from "../../../hooks/useExport";

import IconsTray from "../../../utils/IconsTray";
import Navlinks from "../../navbar/NavLinks";

const Header = ({ showTray = false, showNavLink = true, selectedPage, setSelectedPage }) => {
  const { logo } = useExport();
 
  return (
    <header className=" header-div ">
      <Link  to={'/'}>
        <div  className="cursor-pointer" >
          <img src={logo} alt="page-logo" className="Img" />
        </div>
      </Link>

      {showNavLink && (
        <Navlinks
          styles={"gap-4 my-2 text-white d-none d-md-flex"}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}

      {showTray && <IconsTray />}
    </header>
  );
};

export default Header;
