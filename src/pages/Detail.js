import { useParams } from "react-router-dom";
import "./Detail.css"; 

export default function Detail() {
  const { category, id } = useParams();

  const data = {
    movie: [
      { id: 1, title: "John Wick", description: "John Wick adalah sebuah film thriller aksi Amerika Serikat tahun 2014 yang disutradarai oleh Chad Stahelski dan ditulis oleh Derek Kolstad. Keanu Reeves berperan sebagai John Wick, seorang pembunuh bayaran legendaris yang keluar dari masa pensiun untuk membalas dendam terhadap orang-orang yang membunuh anjingnya, hadiah terakhir dari istrinya yang baru saja meninggal.", img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg", rate: 4, infoUrl: "https://en.wikipedia.org/wiki/John_Wick_(film)" },
      { id: 2, title: "Oppenheimer", description: "Oppenheimer adalah film drama thriller biografi epik tahun 2023[a] yang ditulis, disutradarai, dan diproduksi oleh Christopher Nolan. [8] Ini mengikuti kehidupan J. Robert Oppenheimer, fisikawan teoretis Amerika yang membantu mengembangkan senjata nuklir pertama selama Perang Dunia II. ", img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg", rate: 5, infoUrl: "https://en.wikipedia.org/wiki/Oppenheimer_(film)" }
    ],
    series: [
      { id: 1, title: "Squid Game", description: "Squid Game (bahasa Korea: 오징어 게임) adalah serial televisi thriller survival distopia Korea Selatan yang dibuat, ditulis, dan disutradarai oleh Hwang Dong-hyuk untuk Netflix. ", img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Squid_Game.jpg", rate: 5, infoUrl: "https://en.wikipedia.org/wiki/Squid_Game" },
      { id: 2, title: "Queen of Tears", description: "Queen of Tears (Hangul: 눈물의 여왕) adalah seri televisi Korea Selatan yang ditulis Park Ji-Eun serta dibintangi oleh Kim Soo-Hyun dan Kim Ji-Won. Seri ini menggambarkan kisah pasangan suami istri yang berada dalam krisis. ", img: "https://upload.wikimedia.org/wikipedia/id/5/51/Queen_of_Tears_Main_Poster.png", rate: 5, infoUrl: "https://id.wikipedia.org/wiki/Queen_of_Tears" }
    ],
    game: [
      { id: 1, title: "Elden Ring", description: "Elden Ring[b] adalah game role-playing aksi tahun 2022 yang dikembangkan oleh FromSoftware. Game ini disutradarai oleh Hidetaka Miyazaki dengan pembangunan dunia yang disediakan oleh penulis fantasi Amerika George RR Martin. Ini diterbitkan untuk PlayStation 4, PlayStation 5, Windows, Xbox One, dan Xbox Series X/S pada 25 Februari di Jepang oleh FromSoftware dan secara internasional oleh Bandai Namco Entertainment. ", img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg", rate: 5, infoUrl: "https://en.wikipedia.org/wiki/Elden_Ring" },
      { id: 2, title: "Grand Theft Auto V", description: "Grand Theft Auto V adalah game aksi-petualangan tahun 2013 yang dikembangkan oleh Rockstar North dan diterbitkan oleh Rockstar Games. Ini adalah entri utama ketujuh dalam seri Grand Theft Auto, setelah Grand Theft Auto IV tahun 2008, dan angsuran kelima belas secara keseluruhan. Berlatar di negara bagian fiksi San Andreas, berdasarkan California Selatan, cerita pemain tunggal mengikuti tiga protagonis—pensiunan perampok bank Michael De Santa (Ned Luke), gangster jalanan Franklin Clinton (Shawn Fonteno), dan pengedar narkoba dan penembak Trevor Philips (Steven Ogg).", img: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png", rate: 4, infoUrl: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_V" }
    ]
  };

  const item = data[category]?.find((i) => i.id === Number(id));

  if (!item) {
    return <p>Data not found</p>;
  }

  return (
    <div className="detail-container">
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} className="detail-image" />
      <p className="detail-rating">Rating: {item.rate}</p>
      <p className="detail-description">
        {item.description}{" "}
        {item.infoUrl && (
          <a href={item.infoUrl} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        )}
      </p>
    </div>
  );
}
