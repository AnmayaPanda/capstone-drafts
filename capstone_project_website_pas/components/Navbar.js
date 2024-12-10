import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const sections = [
    'Home', 'About Us', 'Need Identification', 'Challenges', 'Customer Insights', 
    'Existing Product Survey', 'Project Goals', 'Project Timeline', 'Components Used', 
    'Subsystem Diagram', 'Geometric Modelling', 'Design Solution', 
    'Engineering Analysis', 'Contact Us'
  ];

  return (
    <nav>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <a href={`#${section.replace(/\s+/g, '').toLowerCase()}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
