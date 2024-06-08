import React from 'react';
import './OurRecruiters.css';
import wipro from '../../assets/images/wipro.jpg';
import accenture from '../../assets/images/accenture.jpg';
import adobe from '../../assets/images/adobe.jpg';
import amazon from '../../assets/images/amazon.jpg';
import byjus from '../../assets/images/byjus.jpg';
import cisco from '../../assets/images/cisco.jpg';
import cognizant from '../../assets/images/cogni.jpg';
import hp from '../../assets/images/hp.jpg';
import infosys from '../../assets/images/infosys.jpg';
import intuit from '../../assets/images/intuit.jpg';
import oracle from '../../assets/images/oracle.jpg';
import siemens from '../../assets/images/siemens.jpg';
import snapdeal from '../../assets/images/snapdeal.jpg';
import tata from '../../assets/images/tata.jpg';
import tcs from '../../assets/images/tcs.jpg';
import techm from '../../assets/images/techm.jpg';



function Recruiters() {
  const logos = [
    wipro,
    accenture,
    adobe,
    amazon,
    byjus,
    cisco,
    cognizant,
    hp,
    infosys,
    intuit,
    oracle,
    siemens,
    snapdeal,
    tata,
    tcs,
    techm,
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ];

  return (
    <section className="recruiters">
      <div className="recruiters-container">
        <h2>Our Placement Partners</h2>
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt={`Recruiter ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Recruiters;
