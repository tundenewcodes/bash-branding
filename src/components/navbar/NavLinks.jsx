import { SelectedLink } from "../../utils/navlinks";
import Link from "./Link";

const Navlinks = ({ selectedPage, setSelectedPage, styles }) => {
  return (
    <div className={styles} data-aos="fade-up" data-aos-once="true">
      <Link
        page={SelectedLink.Home}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.About}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.Journey}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.Communities}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Link
        page={SelectedLink.Podcast}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page={SelectedLink.ContactUs}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Navlinks;
