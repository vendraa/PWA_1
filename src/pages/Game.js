import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css"; 

export default function Game() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const navigate = useNavigate(); 


  const poster = [
    { title: "Elden Ring", id: 1, rate: 5, genre: "Souls-like", img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg", },
    { title: "Elden Ring", id: 1, rate: 5, genre: "Souls-like", img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg", },
    { title: "Elden Ring", id: 1, rate: 5, genre: "Souls-like", img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg", },
  ];

  const data = [
    { title: "Grand Theft Auto V", id: 2, rate: 4, genre: "Action-Adventure", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", },
    { title: "Grand Theft Auto V", id: 2, rate: 4, genre: "Action-Adventure", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", },
    { title: "Grand Theft Auto V", id: 2, rate: 4, genre: "Action-Adventure", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", },
  ];

  const handleNavigate = (category, id) => {
    navigate(`/detail/${category}/${id}`);
  };

  return (
    <>
      <p id="game">Top Games</p>
      <div className="containerTop">
        {poster.map((item) => (
          <Fragment key={item.id}>
            <div onClick={() => handleNavigate('game', item.id)}>
              <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </div>
          </Fragment>
        ))}
      </div>

      <p id="game">All Games</p>
      <div>
        {data.map((item) => (
          <Fragment key={item.id}>
            <div onClick={() => handleNavigate('game', item.id)}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}