import React from "react";
import "./SignUp.css";
import Footer from "../../ReusableComponents/Footer/Footer";

const testimonials = [
  {
    quote:
      "Instahyre really stands out from a typical job site by showing relevant positions at top companies!",
    name: "Deepak Kumar",
    position: "Hired at Amazon",
    img: "https://static.instahyre.com/images/candidates/deepak.webp",
  },
  {
    quote:
      "It was a really cool experience with Instahyre. Very simple without the bugging from irrelevant jobs.",
    name: "Tushar Garg",
    position: "Hired at Paytm",
    img: "https://static.instahyre.com/images/candidates/tushar.webp",
  },
];

function SignUp() {
  return (
    <>
    <div className="sup-page">
      <div className="sup-card">
        {/* Left: Testimonials */}
        <div className="sup-left">
          <h3>Top companies. Full privacy. No spam.</h3>
          {testimonials.map((t, i) => (
            <div className="sup-quote" key={i}>
              <p className="sup-quote-text">“{t.quote}”</p>
              <div className="sup-person">
                <img src={t.img} alt={t.name} />
                <div>
                  <div className="sup-name">{t.name}</div>
                  <div className="sup-role">{t.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Form */}
        <div className="sup-right">
          <button className="sup-btn sup-btn-linkedin" type="button">
            <span className="sup-icon">in</span>
            Sign in with LinkedIn
          </button>
          <button className="sup-btn sup-btn-google" type="button">
            <span className="sup-icon">G</span>
            Sign in with Google
          </button>

          <div className="sup-divider">
            <span>OR</span>
          </div>

          <form className="sup-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Your Name
              <input type="text" name="name" placeholder="Full Name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
              Password
              <input type="password" name="password" placeholder="••••••••" required />
            </label>

            <label className="sup-checkbox">
              <input type="checkbox" defaultChecked required />
              <span>
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </span>
            </label>

            <button className="sup-btn sup-btn-primary" type="submit">
              Get Started »
            </button>
          </form>

          <p className="sup-login">
            Already have an account? <a href="#">Log in here</a>
          </p>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default SignUp;