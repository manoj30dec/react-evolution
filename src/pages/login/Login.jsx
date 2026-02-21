import { useState, useTransition } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";
import Loading from "../../component/loading/Loading";
import "./Login.css";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';
  // form pending state using React 19 way
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event) => {
    //in React 19 way
    startTransition(async () => {
      event.preventDefault();
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.access_token) {
        login(data.access_token);
        // navigate("/dashboard");
        console.log(from)
        navigate(from, { replace: true })
      } else {
        if (!res.ok) {
          setError(data.message);
          return;
        }
      }
    });
  };

  // const errorHandling = () => {
  //   if (error.message) {
  //     console.log(error);
  //   }
  // };

  // Older way
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ email, password })
  //   })
  //   const data = await res.json();
  //   if (data.access_token) {
  //     login(data.access_token);
  //     navigate("/dashboard")
  //   } else {
  //     alert("Invalid credentials")
  //   }
  // }

  const handleInput = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };
  console.log(error);
  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className="login-wrapper">
          <div className="login-container">
            <div className="row login-card">
              <div className="col-md-6 login-left">
                {error ? <h1>error</h1> : ""}
                <h2>Welcome Back!</h2>
                <p>
                  Sign in to your account to continue accessing our platform and
                  all its features. We're glad to have you back!
                </p>

                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>Secure & Encrypted Login</div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <div>Fast and Reliable Access</div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-headset"></i>
                    </div>
                    <div>24/7 Customer Support</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 login-right">
                {error && (
                  <p
                    style={{
                      color: "red",
                      textAlign: "center",
                      fontSize: "22px",
                    }}
                  >
                    {error}
                  </p>
                )}
                <h3>Sign In</h3>
                <p className="subtitle">
                  Enter your credentials to access your account
                </p>

                {/* <div className="social-login">
              <button type="button" className="social-btn btn-google">
                <i className="fab fa-google"></i> Google
              </button>
              <button type="button" className="social-btn btn-facebook">
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
            </div>

            <div className="divider">
              <span>Or continue with email</span>
            </div> */}

                <form id="loginForm" onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      value={email}
                      name="email"
                      onChange={(e) => handleInput(e)}
                    />
                  </div>

                  <div className="mb-3 position-relative">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      name="password"
                      onChange={(e) => handleInput(e)}
                    />
                    <span className="password-toggle" id="togglePassword">
                      <i className="far fa-eye"></i>
                    </span>
                  </div>

                  {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div> */}

                  <button type="submit" className="btn btn-login mb-3">
                    Login
                  </button>

                  <div className="forgot-password">
                    <a href="#" id="forgotPassword">
                      Forgot your password?
                    </a>
                  </div>

                  {/* <div className="signup-link">
                Don't have an account? <a href="#" id="signUpLink">Sign up here</a>
              </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
