import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; 
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css"; 

export default function Series() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate();

  const poster = [
    { title: "Squid Game", id: 1, rate: 5, genre: "Survival, Science Fiction", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg", },
    { title: "Squid Game", id: 1, rate: 5, genre: "Survival, Science Fiction", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg", },
    { title: "Squid Game", id: 1, rate: 5, genre: "Survival, Science Fiction", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg", },
  ];

  const data = [
    { title: "Queen of Tears", id: 2, rate: 5, genre: "Romantic Comedy, Marriage Crisis", img: "https://upload.wikimedia.org/wikipedia/id/5/51/Queen_of_Tears_Main_Poster.png", },
    { title: "Queen of Tears", id: 2, rate: 5, genre: "Romantic Comedy, Marriage Crisis", img: "https://upload.wikimedia.org/wikipedia/id/5/51/Queen_of_Tears_Main_Poster.png", },
    { title: "Queen of Tears", id: 2, rate: 5, genre: "Romantic Comedy, Marriage Crisis", img: "https://upload.wikimedia.org/wikipedia/id/5/51/Queen_of_Tears_Main_Poster.png", },
  ];

  const handleNavigate = (category, id) => {
    navigate(`/detail/${category}/${id}`); 
  };

  return (
    <>
      <p id="series">Top Series</p>
      <div className="containerTop">
        {poster.map((item) => (
          <Fragment key={item.id}>
            <div onClick={() => handleNavigate('series', item.id)}>
              <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </div>
          </Fragment>
        ))}
      </div>

      <p id="series">All Series</p>
      <div>
        {data.map((item) => (
          <Fragment key={item.id}>
            <div onClick={() => handleNavigate('series', item.id)}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}
