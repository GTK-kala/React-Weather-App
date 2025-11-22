import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import ThemeToggle from "../components/ThemeToggle";
import ForeCastList from "../components/ForecastList";
import WeatherAnimation from "../components/WeatherAnimation";

const Home = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <WeatherCard />
      <ThemeToggle />
      <ForeCastList />
      <WeatherAnimation />
    </>
  );
};

export default Home
