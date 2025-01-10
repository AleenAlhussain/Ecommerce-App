import React, { useState } from "react";
import login from "../assets/images/login_bg-removebg-preview.png";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., API call to validate username and password
    console.log("Login Attempt:", { username, password, rememberMe });
  };

  return (
    <div className="container-fluid h-custom my-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5 mt-5">
          <img src={login} className="img-fluid" alt="Sample image" />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form className="mt-5" onSubmit={handleLogin}>
            {/* <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div> */}

            <div className="form-outline mb-3 my-5">
              <input
                type="text"
                id="username"
                className="form-control form-control-lg"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-outline mb-3">
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </div>

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
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Have an account?{" "}
                <a href="/register" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
