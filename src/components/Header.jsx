import { useState } from "react";
import pokedex from "../images/pokedex.png";
import pokevi1 from "../images/pokevi1.mp4";
import ball from "../images/ball.png";

function Header() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <header className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between relative">
 
      <img
        src={ball}
        alt="pokeball"
        onClick={() => setShowVideo(true)}
        className="w-12 h-12 md:w-14 md:h-14 cursor-pointer hover:animate-spin transition duration-300"
      />

      <img
        src={pokedex}
        alt="pokedex"
        className="absolute left-1/2 transform -translate-x-1/2 w-32 h-10 md:w-48"
      />

    
      <div className="w-12 h-12 md:w-14 md:h-14"></div>

      {showVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setShowVideo(false)}
        >
          <video
            src={pokevi1}
            className="w-[98vw] h-[98vh] object-contain rounded-xl shadow-lg"
            autoPlay
            muted
            loop
          />
        </div>
      )}
    </header>
  );
}

export default Header;
