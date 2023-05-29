import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.trim();
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      style={{
        color: `${selectedPage === lowerCasePage ? "yellow" : "white"}`,
      }}
      className={` transition duration-500 hover:text-white   `}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
