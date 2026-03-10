import React from "react";
import { ChevronsDown } from "lucide-react";
import "./Hero.css";
function Hero({ title, bgImage, nextID }) {

  const isVideo = bgImage && bgImage.endsWith('.mp4');
  const isNext = nextID;
  return (

    <div className="hero">
      {isVideo ? (
        <video autoPlay muted loop playsInline className="hero__background hero__video">
          <source src={bgImage} type="video/mp4" />
        </video>
      )
        :
        (
          <div className="hero__background hero__image" style={{ backgroundImage: `url(${bgImage})` }}></div>
        )
      }
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        {isNext && (
          <a href={nextID} className="hero__button"><ChevronsDown size={48} /></a>
        )}
      </div>
    </div>
  )
}

export default Hero;
