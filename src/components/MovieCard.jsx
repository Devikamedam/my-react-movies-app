import React from "react";
import Star from "../assets/star.svg";
const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-inner shadow-light-100/10 max-w-90">
      <img
        className="rounded-lg h-auto w-full"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt="{title}"
      />

      <div className="mt-4">
        <h3 className="mb-2">{title}</h3>
        <div className="flex flex-row items-center flex-wrap gap-2">
          <div className="flex gap-2">
            <img src={Star} alt="Star Icon" className="h-5 " />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p>
            {original_language
              ? original_language[0].toUpperCase() + original_language.slice(1)
              : "N/A"}
            {/* {original_language?.[0]?.toUpperCase() + original_language?.slice(1) || 'N/A'} */}
          </p>
          <span>•</span>
          <p>{release_date ? release_date.split("-")[0] : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
