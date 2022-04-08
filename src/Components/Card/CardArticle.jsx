import React, { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function CardArticle({
  items: {
    title,
    country,
    date: { start, end },
    description,
    maps,
    img,
  },
}) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // const [mobile, setMobile] = useState(false);
  // let updatedDescription;
  // let descriptionLimit = 150;
  // if (description.length > descriptionLimit) {
  //   updatedDescription = `${description.slice(0, descriptionLimit)}...`;
  // }

  return (
    <article
      className="card"
      data-aos-duration="300"
      data-aos="fade-right"
      data-aos-offset="0"
      data-aos-easing="ease-out"
    >
      <div className="card-cover">
        <img className="cover__img" src={img.includes("http") ? img : `./images/${img}`} />
      </div>
      <div className="card-content">
        <header className="card-header">
          <h2>{title}</h2>
          <p>
            <span className="location__icon">
              <FaMapMarkerAlt />
            </span>
            {country}
          </p>
        </header>
        <div className="card-date">
          {start} - {end}
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
        <a className="card-cta-anchor" href={maps} target="_blank">
          <div className="card-cta">VIEW ON MAPS</div>
        </a>
      </div>
    </article>
  );
}

export default CardArticle;
