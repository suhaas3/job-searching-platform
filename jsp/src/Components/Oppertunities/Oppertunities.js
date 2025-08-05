import React, { useState } from 'react'
import './Oppertunities.css';
import Footer from '../../ReusableComponents/Footer/Footer';

function Oppertunities() {

  const [selectedJobs, setSelectedJobs] = useState([]);

  const jobOptions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "UI/UX Designer"
  ];

  const handleJobSelect = (e) => {
    const value = e.target.value;
    if (value && !selectedJobs.includes(value)) {
      setSelectedJobs([...selectedJobs, value]);
    }
  };

  const removeJob = (job) => {
    setSelectedJobs(selectedJobs.filter((j) => j !== job));
  };

  const [status, setStatus] = useState("");

  const [location, setLocation] = useState("all");

  const [companySize, setCompanySize] = useState("all");

  const [industry, setIndustry] = useState("all");
  return (
    <>
    <div className='oppertunities-container'>
      <div className='oppertunities-header'>
        <h3>We're working on finding matching opportunities...</h3>
      </div>
      <div className='oppertunities-sections'>
        <div className="opportunities-left-section">
          {/* Search jobs */}
          <div className="card search-jobs-card">
            <label className="field-label">Search for a job</label>
            <select onChange={handleJobSelect} defaultValue="" className="job-select">
              <option value="" disabled>
                Select a role
              </option>
              {jobOptions.map((job, idx) => (
                <option key={idx} value={job}>
                  {job}
                </option>
              ))}
            </select>

            <div className="chips">
              {selectedJobs.map((job, idx) => (
                <button
                  key={idx}
                  className="chip"
                  onClick={() => removeJob(job)}
                  title="Remove"
                >
                  {job} <span className="chip-x">✖</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick tip */}
          <div className="card quick-tip">
            <h4 className="card-title">Quick tip</h4>
            <ul className="tip-list">
              <li>
                Since not all companies will go ahead, we encourage you to apply to
                several companies.
              </li>
              <li>
                However, avoid applying if you don't want to interview, as any
                interview backouts will be shown to other companies!
              </li>
            </ul>
          </div>

          {/* Status filter */}
          <div className="card status-filter-card">
            <h4 className="card-title">Filter by status</h4>

            <label className="option">
              <input
                type="radio"
                name="status"
                value="undecided"
                checked={status === "undecided"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Undecided (0)
            </label>

            <label className="option">
              <input
                type="radio"
                name="status"
                value="interested"
                checked={status === "interested"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Interested (0)
            </label>

            <label className="option">
              <input
                type="radio"
                name="status"
                value="not-interested"
                checked={status === "not-interested"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Not Interested (1)
            </label>
          </div>

          {/* Location filter */}
          <div className="card location-filter-card">
            <h4 className="card-title">Filter by location</h4>

            <label className="option">
              <input
                type="radio"
                name="location"
                value="all"
                checked={location === "all"}
                onChange={(e) => setLocation(e.target.value)}
              />
              All (0)
            </label>
          </div>

          {/* Company size filter */}
          <div className="card company-size-filter-card">
            <h4 className="card-title">Filter by company size</h4>

            <label className="option">
              <input
                type="radio"
                name="companySize"
                value="all"
                checked={companySize === "all"}
                onChange={(e) => setCompanySize(e.target.value)}
              />
              All (0)
            </label>
          </div>

          {/* Industry filter */}
          <div className="card industry-filter-card">
            <h4 className="card-title">Filter by industry</h4>

            <label className="option">
              <input
                type="radio"
                name="industry"
                value="all"
                checked={industry === "all"}
                onChange={(e) => setIndustry(e.target.value)}
              />
              All (1)
            </label>

            <label className="option">
              <input
                type="radio"
                name="industry"
                value="healthcare"
                checked={industry === "healthcare"}
                onChange={(e) => setIndustry(e.target.value)}
              />
              Healthcare / Hospitals (1)
            </label>

            <label className="option">
              <input
                type="radio"
                name="industry"
                value="medical"
                checked={industry === "medical"}
                onChange={(e) => setIndustry(e.target.value)}
              />
              Medical Devices (1)
            </label>
          </div>

          {/* Online Event card */}
          <div className="card event-card">
            <h4 className="card-title small">Online Events</h4>
            <div className="media">
              <img
                src="https://static.instahyre.com/images/webinars/ux-hacks-recording.webp"
                alt="Webinar UX Design Hacks"
              />
            </div>
            <p className="muted">
              Learn about UX Design by watching this webinar recording.
            </p>
          </div>

          {/* Blog card */}
          <div className="card blog-card">
            <h4 className="card-title small">From our Blog</h4>
            <div className="media">
              <img
                src="https://instahyre-blog.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/07/01071741/Salary-Negotiation-101-Thumbnail.png"
                alt="Salary Negotiation"
              />
            </div>
            <p className="muted">
              Salary Negotiation 101: The Secret to Getting the Salary You Ask
            </p>
          </div>

          {/* Follow card */}
          <div className="card follow-card">
            <div className="follow-card__sparkle follow-card__sparkle--tl">✦</div>
            <div className="follow-card__sparkle follow-card__sparkle--br">✦</div>

            <h3 className="follow-card__title">
              Follow Us <span className="heart">💗</span>
            </h3>

            <p className="follow-card__subtitle">
              Be the first to know about jobs at top
              <br /> companies and our exclusive events!
            </p>

            <div className="follow-card__row">
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>

            <div className="follow-card__actions">
              <a
                className="btn btn--linkedin"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">in</span>
                <span>Follow</span>
              </a>

              <a
                className="btn btn--instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">◎</span>
                <span>Follow</span>
              </a>
            </div>

            <p className="follow-card__note">
              50K+ followers and counting – join us!
            </p>
          </div>
        </div>

        <div className='oppertunities-right-section'>
          <div className="job-card">
            {/* Left side content */}
            <div className="job-left">
              <img src="https://media.licdn.com/dms/image/v2/C560BAQH4QzMspQ8SSw/company-logo_200_200/company-logo_200_200/0/1663000963144/achira_labs_logo?e=2147483647&v=beta&t=gbnRcOTODcCyDMhr8B5rhc1R5FW3_VUNAV-9S2IkCzk" alt="Company Logo" className="company-logo" />

              <div className="job-info">
                <h3 className="job-title">
                  Achira Labs - Fullstack Developer - Intern (Internship)
                </h3>

                <p className="job-location">
                  <span className="icon">📍</span> Job available in Pune
                </p>

                <p className="company-details">
                  <span className="icon">👥</span> Founded in 2009 • 10 - 50 employees
                </p>

                <p className="job-description">
                  Achira Labs is a pioneering technology company that empowers
                  patients and doctors with convenient and timely access to accurate...
                </p>

                <div className="skills">
                  <span className="skill-tag react">React.js</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Data Structures</span>
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="job-right">
              <button className="view-btn">View »</button>
              <p className="declined-text">Declined today</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <Footer/>

    </>

  )
}



export default Oppertunities;
