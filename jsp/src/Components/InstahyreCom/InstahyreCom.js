import React, { useState } from 'react';
import './InstahyreCom.css';
import Footer from '../../ReusableComponents/Footer/Footer';

export default function InstahyreCom() {

  const [currentStep, setCurrentStep] = useState(1);

  const goNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const goBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const CheckboxObj = [
    {
      question: "Are you a working professional or fresher?",
      name: "status",
      options: [
        { label: "I am a working professional", value: "working-professional" },
        { label: "I am a student or fresher", value: "student-fresher" },
        { label: "I am on a career break", value: "career-break" }
      ]
    },
    {
      question: "What kind of jobs are you looking for?",
      name: "jobType",
      options: [
        { label: "Both internships and full-time", value: "both" },
        { label: "Full-time only", value: "full-time" },
        { label: "Internships only", value: "internships" }
      ]
    }
  ];

  const [values, setValues] = useState({ status: "", jobType: "" });
  const [touched, setTouched] = useState({ status: false, jobType: false });

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const isValid = values.status && values.jobType;


  const jobCategories = [
    {
      label: "Software Development",
      options: [
        { label: "Frontend Developer", value: "frontend-developer" },
        { label: "Backend Developer", value: "backend-developer" },
        { label: "Full Stack Developer", value: "fullstack-developer" },
        { label: "Mobile App Developer", value: "mobile-developer" }
      ]
    },
    {
      label: "Data & AI",
      options: [
        { label: "Data Analyst", value: "data-analyst" },
        { label: "Data Scientist", value: "data-scientist" },
        { label: "ML Engineer", value: "ml-engineer" },
        { label: "AI Researcher", value: "ai-researcher" }
      ]
    },
    {
      label: "DevOps & Cloud",
      options: [
        { label: "DevOps Engineer", value: "devops-engineer" },
        { label: "Cloud Engineer", value: "cloud-engineer" },
        { label: "Site Reliability Engineer", value: "sre" }
      ]
    },
    {
      label: "Product & Design",
      options: [
        { label: "UI/UX Designer", value: "ui-ux-designer" },
        { label: "Product Manager", value: "product-manager" },
        { label: "Graphic Designer", value: "graphic-designer" }
      ]
    },
    {
      label: "Others",
      options: [
        { label: "Technical Support", value: "technical-support" },
        { label: "QA Tester", value: "qa-tester" },
        { label: "Business Analyst", value: "business-analyst" }
      ]
    }
  ];

  const [selectedRole, setSelectedRole] = useState(""); // state to track selection

  const handleYourRole = (e) => {
    setSelectedRole(e.target.value);
    console.log("Selected Role:", e.target.value); // ✅ you can send this to backend later
  };

  //Highlight your unique skills to recruiters 
  // Add up to 15 skills to enhance your profile
  const [inputSkill, setInputSkill] = useState(""); // for text input
  const [selectedSkills, setSelectedSkills] = useState([]); // for selected skills

  // List of suggested skills
  const suggestedSkills = [
    "JavaScript", "React", "Python", "SQL", "Node.js",
    "CSS", "Git", "Machine Learning"
  ];

  const maxSkills = 15; // limit to 15 skills

  // Add skill to selectedSkills
  const handleAddSkill = (skill) => {
    if (skill && !selectedSkills.includes(skill) && selectedSkills.length < maxSkills) {
      setSelectedSkills([...selectedSkills, skill]); // add skill to the array
    }
    setInputSkill(""); // clear input box
  };

  // Remove skill from selectedSkills
  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = selectedSkills.filter(skill => skill !== skillToRemove);
    setSelectedSkills(updatedSkills);
  };


  //second section of code that step 2/4

  const [selectedLocation, setSelectedLocation] = useState("");

  // List of cities (can be fetched from API or file)
  const locations = [
    "Bangalore",
    "Delhi / NCR",
    "Mumbai",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Remote"
  ];

  //working locations

  const [selectedOptions, setSelectedOptions] = useState([]);

  const workOptions = [
    "Anywhere in India",
    "Anywhere outside India",
    "Bangalore",
    "Hyderabad",
    "Remote",
    "Delhi / NCR"
  ];

  const handleSelect = (event) => {
    const value = event.target.value;

    if (value && !selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    }

    event.target.value = "";
  };

  const handleRemove = (optionToRemove) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== optionToRemove));
  };

  //joining the company
  const [selectedJoinTime, setSelectedJoinTime] = useState('');

  const joinOptions = [
    "Immediately",
    "Within 15 days",
    "Within 30 days",
    "After 30 days",
    "Currently not available"
  ];


  //Third page that step 3/4 
  const [input, setInput] = useState('');
  const [companies, setCompanies] = useState([]);

  function handleKeyDown(e) {
    if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
      e.preventDefault();
      if (!companies.includes(input.trim())) {
        setCompanies([...companies, input.trim()]);
      }
      setInput('');
    }
  }

  function removeCompany(index) {
    const updated = companies.filter((_, i) => i !== index);
    setCompanies(updated);
  }

  //degree selection
  // Dynamic options for select
  const courseOptions = ["B.Tech", "B.Sc", "B.Com", "M.Tech", "MCA"];
  const specializationOptions = ["CSE", "ECE", "EEE", "IT", "Mechanical"];

  // State management
  const [course, setCourse] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [year, setYear] = useState('');
  const [university, setUniversity] = useState('');
  const [qualifications, setQualifications] = useState([]);


  const handleAdd = () => {
    if (course && specialization && year && university) {
      const newQualification = `${course} - ${specialization} - ${year} - ${university}`;
      setQualifications([...qualifications, newQualification]);

      // Clear form
      setCourse('');
      setSpecialization('');
      setYear('');
      setUniversity('');
    }
  };

  //upload the resume file
  const [fileName, setFileName] = useState('');

  // This function runs when user selects a file
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get first selected file
    if (file && file.type === 'application/pdf') {
      setFileName(file.name); // Set file name
    } else {
      alert('Please upload a PDF file');
    }
  };


  //css step 4/4:
  const [privacy, setPrivacy] = useState('allowAll');

  const [company, setCompany] = useState('');
  const [blockedList, setBlockedList] = useState([]);

  const handleAddCompany = (e) => {
    if (e.key === 'Enter' && company.trim() !== '') {
      if (!blockedList.includes(company.trim())) {
        setBlockedList([...blockedList, company.trim()]);
      }
      setCompany('');
    }
  };


  // 🔁 Renamed from handleRemove to removeBlockedCompany
  const removeBlockedCompany = (index) => {
    const updatedList = blockedList.filter((_, i) => i !== index);
    setBlockedList(updatedList);
  };

  //mobile number
  const [showWhatsAppInput, setShowWhatsAppInput] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');

  const countryCodes = [
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "USA", code: "+1", flag: "🇺🇸" },
    { name: "UK", code: "+44", flag: "🇬🇧" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Japan", code: "+81", flag: "🇯🇵" }
  ];

  //gender
  const [gender, setGender] = useState('');


  return (
    <>

      {currentStep === 1 && (
        <div className='instahyre-first-container'>
          <div className='fisrt-section'>
            <h3 style={{ margin: 0 }}>Step 1/4: Add your skills</h3>
            <p style={{ margin: 0, padding: '4px' }}>Hi Jatangi! We just need some quick info about your ideal job.</p>
          </div>
          <hr />

          <div className="checkbox-container">
            {CheckboxObj.map(({ question, name, options }) => (
              <div className="checkbox-group" key={name}>
                <p>{question}</p>
                <div className="radio-options">
                  {options.map(({ label, value }) => (
                    <label key={value} className="radio-label">
                      <input
                        type="radio"
                        name={name}
                        value={value}
                        checked={values[name] === value}
                        onChange={(e) => handleChange(name, e.target.value)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {touched[name] && !values[name] && (
                  <small className="error">Please choose one option.</small>
                )}
              </div>
            ))}

            <button type="button" disabled={!isValid}>
              Continue
            </button>
          </div>

          <div className="preferred-role">
            <p>Select your preferred role:</p>
            <div>
              <label htmlFor="job-role">Select a Job Role:</label>
              <select
                id="job-role"
                name="job-role"
                value={selectedRole} // controlled input
                onChange={handleYourRole} // updates state when changed
              >
                <option value="">-- Please choose an option --</option>
                {jobCategories.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* {selectedRole && (
              <p style={{ marginTop: "8px" }}>
                ✅ You selected: <strong>{selectedRole}</strong>
              </p>
            )} */}
          </div>


          <div className="skills-selected-container">
            <h3>Add Your Skills</h3>
            <p>You can add up to 15 skills.</p>

            {/* Selected Skills */}
            <p>Selected Skills:</p>
            <div>
              {selectedSkills.map(skill => (
                <span key={skill} style={{ marginRight: "10px" }}>
                  {skill}
                  <button onClick={() => handleRemoveSkill(skill)}> x </button>
                </span>
              ))}
            </div>

            {/* Input to add new skill */}
            <input
              type="text"
              placeholder="Enter your skill"
              value={inputSkill}
              onChange={(e) => setInputSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddSkill(inputSkill.trim());
                }
              }}
            />
            <button onClick={() => handleAddSkill(inputSkill.trim())}>Add</button>

            {/* Suggested Skills */}
            <p>Suggested Skills:</p>
            <div>
              {suggestedSkills.map(skill => (
                <button
                  key={skill}
                  onClick={() => handleAddSkill(skill)}
                  disabled={selectedSkills.includes(skill)}
                  style={{
                    margin: "5px",
                    padding: "5px 10px",
                    backgroundColor: selectedSkills.includes(skill) ? "#ccc" : "#f0f0f0",
                    border: "1px solid #888",
                    cursor: selectedSkills.includes(skill) ? "not-allowed" : "pointer"
                  }}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}



      {currentStep === 2 && (
        <div className='instahyre-second-container'>
          <div className='second-section'>
            <h4 style={{ margin: 0 }}>Step 2/4: Specify job preferences</h4>
            <p style={{ margin: 0, padding: "4px" }}>So we can find highly relevant jobs for you</p>
          </div><hr />

          <div className='currently-located'>
            <p>Where are you currently located?</p>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">-- Select your location --</option>
              {locations.map((location, index) => (
                <option key={index} value={location.toLowerCase()}>
                  {location}
                </option>
              ))}
            </select>

            {/* Show selected location below (optional) */}
            {/* {selectedLocation && (
        <p style={{ marginTop: '10px' }}>
          You selected: <strong>{selectedLocation}</strong>
        </p>
      )} */}
          </div>


          <div className='open-working'>
            <h5>Where are you open to working?</h5>

            {/* Display selected locations as tags */}
            <div className="selected-working-locations">
              {selectedOptions.length === 0 ? (
                <input placeholder="e.g. Anywhere in India, Bangalore" disabled />
              ) : (
                <div className="selected-input">
                  {selectedOptions.map((loc, index) => (
                    <span key={index} className="tag">
                      {loc}
                      <button className="remove-btn" onClick={() => handleRemove(loc)}>×</button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown to choose more locations */}
            <select onChange={handleSelect}>
              <option value="">-- Select work location --</option>
              {workOptions.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className='join-company'>
            <h5>When can you join the company if selected?</h5>

            <select
              value={selectedJoinTime}
              onChange={(e) => setSelectedJoinTime(e.target.value)}
            >
              <option value="">-- Select join time --</option>
              {joinOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {/* {selectedJoinTime && (
        <p style={{ marginTop: "10px" }}>
          ✅ You selected: <strong>{selectedJoinTime}</strong>
        </p>
      )} */}
          </div>

        </div>
      )}


      {currentStep === 3 && (
        <div className='instahyre-third-container'>
          <div className='third-section'>
            <h4 style={{ margin: 0 }}>Step 3/4: Upload resume</h4>
            <p style={{ margin: 0, padding: "4px" }}>An updated resume is key to being shortlisted</p>
          </div><hr />
          <div className="internships-container">
            <h4>Have you done any internships? If yes, enter the company names:</h4>

            <div className="input-chip-container">
              {companies.map((company, index) => (
                <div className="chip" key={index}>
                  {company}
                  <span className="close" onClick={() => removeCompany(index)}>×</span>
                </div>
              ))}
              <input
                type="text"
                placeholder="e.g. Facebook, Google"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className='qualification'>
            <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
              <h4>Enter your educational qualifications:</h4>

              {/* Course Select */}
              <select value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="">Select Course</option>
                {courseOptions.map((item, idx) => (
                  <option key={idx} value={item}>{item}</option>
                ))}
              </select>

              {/* Specialization Select */}
              <select value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                <option value="">Select Specialization</option>
                {specializationOptions.map((item, idx) => (
                  <option key={idx} value={item}>{item}</option>
                ))}
              </select>

              {/* Year Input */}
              <input
                type="text"
                placeholder="Year (e.g. 2025)"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={{ marginTop: '10px', width: '100%', padding: '8px' }}
              />

              {/* University Input */}
              <input
                type="text"
                placeholder="University / Institution"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                style={{ marginTop: '10px', width: '100%', padding: '8px' }}
              />

              {/* Add Button */}
              <button
                onClick={handleAdd}
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#00796b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add Qualification
              </button>

              {/* Output Select */}
              {qualifications.length > 0 && (
                <>
                  <label style={{ marginTop: '20px', display: 'block' }}>Your Qualifications:</label>
                  <select style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
                    <option>Select a qualification</option>
                    {qualifications.map((q, i) => (
                      <option key={i} value={q}>{q}</option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>

          <div className="upload-resume" style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h4>Upload your updated resume:</h4>
            <p>
              If you don't have an updated resume, we strongly suggest you create one.
              Otherwise upload a PDF of your updated LinkedIn profile.
            </p>

            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              style={{ marginTop: '10px' }}
            />

            {fileName && (
              <p style={{ marginTop: '10px', color: 'green' }}>
                ✅ File uploaded: <strong>{fileName}</strong>
              </p>
            )}
          </div>
        </div>
      )}




      {currentStep === 4 && (
        <div className='instahyre-fourth-page'>
          <div className='form-wrapper'>
            <div className='fourth-section'>
              <h4 style={{ margin: 0 }}>Step 4/4: Almost there!</h4>
              <p style={{ margin: 0, padding: "4px" }}>Just tell us your contact and privacy options</p>
            </div><hr />


            <div className="privacy-setting" style={{ padding: '20px', fontFamily: 'Arial' }}>
              <h4>Select your privacy setting:</h4>

              <div>
                <label>
                  <input
                    type="radio"
                    name="privacy"
                    value="allowAll"
                    checked={privacy === 'allowAll'}
                    onChange={(e) => setPrivacy(e.target.value)}
                  />
                  Allow all companies to see my profile except those I block below
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="privacy"
                    value="onlyApplied"
                    checked={privacy === 'onlyApplied'}
                    onChange={(e) => setPrivacy(e.target.value)}
                  />
                  Only companies I apply to can see my profile
                </label>
              </div>
            </div>


            <div className="block-companies">
              <h4>Block the following companies from seeing my profile:</h4>

              <div className="input-container">
                {blockedList.map((item, index) => (
                  <span key={index} className="tag">
                    {item}
                    <button onClick={() => removeBlockedCompany(index)} className="remove-btn">❌</button>
                  </span>
                ))}

                <input
                  type="text"
                  placeholder="Type and press Enter"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  onKeyDown={handleAddCompany}
                />
              </div>
            </div>


            <div className="container mobile-container">
              {/* WhatsApp checkbox section */}
              <div className="WhatsApp">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={showWhatsAppInput}
                    onChange={() => setShowWhatsAppInput(!showWhatsAppInput)}
                  />
                  <h4>Get recruiter messages on WhatsApp</h4>
                </label>
              </div>

              {/* WhatsApp number input shown only when checkbox is checked */}
              {showWhatsAppInput && (
                <div className="mobile-input-wrapper">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="country-code-select"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    placeholder="Enter WhatsApp number"
                    value={whatsAppNumber}
                    onChange={(e) => setWhatsAppNumber(e.target.value)}
                    className="mobile-input"
                  />
                </div>
              )}
            </div>

            <div className="container">
              <div className="male-female">
                <h4>Sometimes companies hire for diversity. What's your gender?</h4>

                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </label>

                <label className="gender-option">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                </label>
              </div>

              {/* To display selected gender (optional) */}
              {/* {gender && <p className="output">Selected Gender: {gender}</p>} */}
            </div>
          </div>

        </div>
      )}



      {/* Navigation Buttons */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        {currentStep > 1 && (
          <button onClick={goBack} className='nav-button'>
            Back
          </button>
        )}
        {currentStep < 4 ? (
          <button onClick={goNext} className='nav-button'>
            Next
          </button>
        ) : (
          <button className='nav-button gethyred-button'>
            GetHyred
          </button>
        )}
      </div>



      <Footer />
    </>
  )
}
