import React from "react";
import search from "../assets/search.svg";
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <div className="  bg-gray-900 shadow-inner shadow-light-100/10 px-3 py-2 w-150 mt-6 flex items-center rounded-lg m-auto ">
        <img
          className=" h-5 flex-1 w-10 mt-2 text-gray-400"
          src={search}
          alt="Search"
        />

        <input
          className="w-full focus:outline-none bg-transparent ml-3"
          type="text"
          value={searchTerm}
          placeholder="Search through thousands of movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default Search;
