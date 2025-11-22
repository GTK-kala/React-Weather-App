import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">🌦️ React Weather App</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
