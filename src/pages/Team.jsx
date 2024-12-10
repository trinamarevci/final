import React from "react";
import "./Team.scss"; // Import the corresponding CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const Team = () => {
  const profiles = [
    {
      id: 1,
      name: "John Doe",
      title: "Marketing Head",
      image: "https://projekti-final-bit.netlify.app/images/team-2.jpg", 
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Head",
      image: "https://projekti-final-bit.netlify.app/images/team-3.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      title: "Marketing Head",
      image: "https://projekti-final-bit.netlify.app/images/team-4.jpg",
    },
    {
      id: 4,
      name: "Bob Brown",
      title: "Marketing Head",
      image: "https://projekti-final-bit.netlify.app/images/team-1.jpg",
    },
  ];

  return (
    <div className="team-container">
      <h2 className="title">Our <i className="tt">Team</i></h2>
      <div className="t-container">
        {profiles.map((profile) => (
          <div className="profiles" key={profile.id}>
            <img src={profile.image} alt={profile.name} className="profile-image" />
            <h3 className="pname">{profile.name}</h3>
            <p className="ptitle">{profile.title}</p>
            <div className="social-icons">
                  <a href="#" className="icon facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="icon twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="icon instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="icon youtube">
                    <FaYoutube />
                  </a>
                </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
