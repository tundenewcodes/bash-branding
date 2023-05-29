import { useExport } from "../../hooks/useExport";
import "./Navbar.css";

export default function Navbar() {
  const { logo } = useExport();
  return (
    <header>
      <div
        style={{ width: "90%" }}
        className="mx-auto d-flex justify-content-between align-items-center"
      >
        <nav className="border border-danger">
          <img src={logo} alt="page-logo" className="nav-img" />
        </nav>
        <nav className="nav-text"> Get In Touch</nav>
      </div>
    </header>
  );
}
