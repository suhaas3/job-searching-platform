import React, { useState } from 'react'
import { FiSearch, FiInbox } from "react-icons/fi";
import './Inbox.css';
import Footer from '../../ReusableComponents/Footer/Footer';



function Inbox() {

  const [status, setStatus] = useState("");

  const conversationOptions = [
    { value: "", label: "Select status" },
    { value: "in-process", label: "In Process" },
    { value: "offer-made", label: "Offer Made" },
    { value: "interviewing", label: "Interviewing" },
    { value: "closed", label: "Closed" },
    { value: "no-response", label: "No Response" },
  ];

  const [filter, setFilter] = useState("all");

  const options = [
    { label: "All", value: "all", count: "" },
    { label: "Unread", value: "unread", count: "(0)" },
    { label: "Starred", value: "starred", count: "(0)" },
  ];



  return (
    <>
      <div className='inbox-container'>
        <div className="inbox-header">
          <h3 className="inbox-title">Inbox</h3>
        </div>

        <div className='inbox-left-right-sections'>
          <div className='inbox-left-section'>

            <div className="conversations">
              <label className="conversation-label">Filter Conversations</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="conversation-select"
              >
                {conversationOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="conversation-filter">
              {options.map((opt) => (
                <label key={opt.value} className="filter-option">
                  <input
                    type="radio"
                    name="conversation"
                    value={opt.value}
                    checked={filter === opt.value}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <span>
                    {opt.label} {opt.count}
                  </span>
                </label>
              ))}
              <div className="filter-icon">
                <span>✔✔</span>
              </div>
            </div>

            <div className="conversation-search-container">
              <div className="search-box">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by job/company/recruiter name"
                  className="search-input"
                />
              </div>
              <p className="no-conversations">No conversations found</p>
            </div>

          </div>

          <div className='inbox-right-section'>
            <div className="no-conversation-container">
              <FiInbox className="inbox-icon" />
              <h4 className="title">No conversation found</h4>
              <p className="subtitle">
                There are no conversations to show at the moment
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer/>
    </>
  )
}


export default Inbox;