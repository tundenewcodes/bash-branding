import { Link } from "react-router-dom";
import { useExport } from "../../../hooks/useExport";
import usePageSetup from "../../../hooks/usePageSetup";
import IconsTray from "../../../utils/IconsTray";
import Navlinks from "../../navbar/NavLinks";

const Header = ({ showTray = false, showNavLink = true }) => {
  const { logo } = useExport();
  const { selectedPage, setSelectedPage } = usePageSetup();
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
