import Communities from "../components/Communities/Communities";
import Podcast from "../components/Podcasts/Podcast";
import Work from "../components/Work";
import Bio from "../components/bio";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";


const Home = ({ allWorkData }) => {
 
  return (
    <>
      <Bio />
      <Work allWorkData={allWorkData} />
      <Projects />
      <Communities />
      <Podcast />
      <Contact />
    </>
  );
};

export default Home;
