import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import ForeCastList from "../components/ForecastList/ForecastList";
import WeatherAnimation from "../components/WeatherAnimation/WeatherAnimation";

const Home = () => {
  return (
    <>
      <WeatherAnimation />
      <Header />
      <SearchBar />
      <WeatherCard />
      <ForeCastList />
    </>
  );
};

export default Home
