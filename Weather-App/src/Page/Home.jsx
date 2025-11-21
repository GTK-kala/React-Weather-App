import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ThemeToggle from "../components/ThemeToggle";
import ForeCastList from "../components/ForecastList";
import WeatherAnimation from "../components/WeatherAnimation";

const Home = () => {
  return (
    <>
      <WeatherCard />
      <Header />
      <SearchBar />
      <ThemeToggle />
      <ForeCastList />
      <WeatherAnimation />
    </>
  );
};

export default Home
