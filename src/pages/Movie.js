import { Fragment } from "react";
import { useNavigate } from "react-router-dom"; 
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const navigate = useNavigate();

    const poster = [
        {
            title: "John Wick", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        },
        {
            title: "John Wick", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        },
        {
            title: "John Wick", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
        },
        
    ];
    const data = [
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
e: "Oppenheimer", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
        {
            title: "Oppenheimer", id: 2,
            rate: 4,
            genre: "biography, drama, history", img:
                "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        },
    ];

    const handleNavigate = (category, id) => {
        navigate(`/detail/${category}/${id}`); 
      };
    
      return (
        <>
          <p id="movies">Top Movies</p>
          <div className="containerTop">
            {poster.map((item) => (
              <Fragment key={item.id}>
                <div onClick={() => handleNavigate('movie', item.id)}>
                  <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
                </div>
              </Fragment>
            ))}
          </div>
    
          <p id="movies">All Movies</p>
          <div>
            {data.map((item) => (
              <Fragment key={item.id}>
                <div onClick={() => handleNavigate('movie', item.id)}>
                  <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
                </div>
              </Fragment>
            ))}
          </div>
        </>
      );
    }
