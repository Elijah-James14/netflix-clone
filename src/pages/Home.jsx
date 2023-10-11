import HeroSection from "../components/HeroSection";

import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Row rowID="1" title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row
        rowID="2"
        title="Now Playing"
        fetchUrl={requests.requestNowPlaying}
      />
      <Row rowID="3" title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowID="4" title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchUrl={requests.requestHorror} />
    </div>
  );
};

export default Home;
