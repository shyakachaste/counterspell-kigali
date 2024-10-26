import React from 'react';
import '../styles/TeamSection.css';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Shyaka Chaste',
    role: 'Event Organizer',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/shyaka-chaste-982a32272/',
  },
  {
    name: 'Bruno Blaise',
    role: 'Event Organizer',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/brunoblaise/',
  },

];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}`} className="member-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="linkedin-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
