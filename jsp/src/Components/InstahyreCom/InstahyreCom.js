import React, { useState } from 'react';
import './InstahyreCom.css';
import Footer from '../../ReusableComponents/Footer/Footer';

export default function InstahyreCom() {

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



  return (
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
            {options.map(({ label, value }) => (
              <>
                <label key={value}>
                  <input type="radio" name={name} value={value} />
                  {label}
                </label><br />
              </>
            ))}
          </div>
        ))}
      </div>

      <div className='preferred-role'>
        <p>Select your preferred role:</p>
        <div>
          <label htmlFor="job-role">Select a Job Role:</label>
          <select id="job-role" name="job-role">
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



<Footer/>

    </div>
  )
}
