import "./styles/search.css";
import searchIcon from "./search-solid.svg";

function Search() {
  return (
    <div className="searchContainer">
      <form className="searchContainer-form">
        <input
          className="searchContainer-input"
          type="text"
          placeholder="Search for a noun..."
        ></input>
        <button className="searchContainer-button" type="button">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;
