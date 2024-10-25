import React, { useState } from 'react';
import './Profile.css';

const members = [
    {
        name: "Linda Ratna Kholifah",
        username: "lindarnaa",
        followers: 0,
        githubUrl: "https://github.com/lindarnaa",
        img: "https://avatars.githubusercontent.com/u/129845064?v=4"
    },
    {
        name: "Nadhif Abhirama Nayaka",
        username: "nadhif9",
        followers: 0,
        githubUrl: "https://github.com/nadhif9",
        img: "https://avatars.githubusercontent.com/u/135530465?v=4"
    },
    {
        name: "Muhammad Hafizh Albanthany",
        username: "apidalb",
        followers: 0,
        githubUrl: "https://github.com/apidalb",
        img: "https://avatars.githubusercontent.com/u/129310745?v=4"
    },
    {
        name: "Novendra Anugrah Fitriatmoko",
        username: "vendraa",
        followers: 0,
        githubUrl: "https://github.com/vendraa",
        img: "https://avatars.githubusercontent.com/u/129577071?v=4"
    },
];

const ProfileCard = ({ name, username, followers, githubUrl, img }) => {
    return (
        <div className="profile-card">
            <img 
                src={img} 
                alt={name}
            />
            <h3>{name}</h3>
            <p>Username: {username}</p>
            <p>Followers: {followers}</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub Profile
            </a>
        </div>
    );
};

export default function Profile() {
    const [profiles] = useState(members);

    return (
        <div className="profile-container">
            <div className="header">Kelompok 14</div>
            <div>
                {profiles.map((profile, index) => (
                    <ProfileCard 
                        key={index}
                        username={profile.username}
                        name={profile.name}
                        followers={profile.followers}
                        githubUrl={profile.githubUrl}
                        img={profile.img}
                    />
                ))}
            </div>
        </div>
    );
}
