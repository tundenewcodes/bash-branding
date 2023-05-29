import Communities from "../components/Communities/Communities";
import Podcast from "../components/Podcasts/Podcast";
import Work from "../components/Work";
import Bio from "../components/bio";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import usePageSetup from "../hooks/usePageSetup";


const Home = ({allWorkData}) => {
 
  const { selectedPage, setSelectedPage, isTopOfPage } = usePageSetup();
  return (
    <>
      <Bio isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}/>
      <Work setSelectedPage={setSelectedPage} allWorkData={allWorkData}/>
      <Projects setSelectedPage={setSelectedPage}/>
      <Communities setSelectedPage={setSelectedPage}/>
      <Podcast  setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </>
  );
};

export default Home;
