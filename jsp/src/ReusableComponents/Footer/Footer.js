import React from 'react';
import './Footer.css';

const footerData = [
  {
    title: 'Jobs by Location',
    items: ['Jobs in Bangalore', 'Jobs in Delhi / NCR', 'Jobs in Mumbai'],
  },
  {
    title: 'Jobs by Function',
    items: ['Software Engineering Jobs', 'Marketing Jobs', 'Sales Jobs', 'Internship Jobs'],
  },
  {
    title: 'For Employers',
    items: ['Post Your Jobs', 'Success Stories', 'Product Academy', 'Resources'],
  },
  {
    title: 'Instahyre',
    items: ['Workscape', 'About', 'Privacy', 'Terms'],
  },
  {
    title: 'Connect',
    items: ['Help Center', 'Contact Us'],
  },
];

function Footer() {
  return (
    <div className='footer-container'>
      {footerData.map((section, index) => (
        <div key={index} className='footer-section'>
          <h3>{section.title}</h3>
          {section.items.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
