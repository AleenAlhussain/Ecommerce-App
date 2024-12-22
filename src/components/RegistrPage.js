import React, { useState } from "react";
import "../Header.css"; // Import your CSS file
import login from "../assets/images/login_bg-removebg-preview.png";
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here, e.g., API call to register the user
    console.log("Register Attempt:", { username, email, password, confirmPassword, rememberMe });
  };

  return (
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-md-9 col-lg-6 col-xl-5 mt-5">
          <img
            src={login}
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form className="mt-5" onSubmit={handleRegister}>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            {/* Username input */}
            <div className="form-outline mb-3">
              <input
                type="text"
                id="username"
                className="form-control form-control-lg"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email input */}
            <div className="form-outline mb-3">
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password input */}
            <div className="form-outline mb-3">
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password input */}
            <div className="form-outline mb-4">
              <input
                type="password"
                id="confirmPassword"
                className="form-control form-control-lg"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Remember me checkbox */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="btn btn-lg"
                style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    backgroundColor: "#fe4c50",
                    color: "#fff",
                  }}
              >
                Register
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Already have an account?{" "}
                <a href="/login" className="link-danger">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
