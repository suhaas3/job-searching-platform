import React, { useState } from 'react';
import './Activites.css';
import Footer from '../../ReusableComponents/Footer/Footer';

function Activites() {
  const [activity, setActivity] = useState('');

  const options = [
    { label: 'Viewed', value: 'viewed' },
    { label: 'Contacted', value: 'contacted' },
    { label: 'Not Shortlisted', value: 'not-shortlisted' },
  ];

  return (
    <>
      <div className="activites-container">
        {/* === Two-column wrapper === */}
        <div className="activites-sections">
          {/* LEFT (half) */}
          <section className="activites-left-section">
            <div className="filter-activiti card act-card">
              <h4 className="card-title">Filter by status</h4>
              {options.map((opt) => (
                <label key={opt.value} className="option">
                  <input
                    type="radio"
                    name="activity"
                    value={opt.value}
                    checked={activity === opt.value}
                    onChange={(e) => setActivity(e.target.value)}
                  />
                  {opt.label} (0)
                </label>
              ))}
            </div>

            <div className="got-insta-card act-card">
              <h4 className="card-title">Got Instahyred?</h4>
              <p className="card-text">
                Let us know if any of these companies hired you through Instahyre, and
                we’ll send you a t-shirt to celebrate your new job :)
              </p>
              <button className="claim-btn">Claim joining bonus »</button>
            </div>
          </section>

          {/* RIGHT (half) */}
          <section className="activites-right-section">
            <div className="no-activity-card">
              <p className="no-activity-text">No activity from companies yet!</p>
            </div>
          </section>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Activites;
