import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, onGeoSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
    setValue("");
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        className="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="search-btn">
        <Search size={18} />
      </button>

      <button
        type="button"
        className="location-btn"
        onClick={onGeoSearch}
      >
        <MapPin size={18} />
      </button>
    </form>
  );
};

export default SearchBar
