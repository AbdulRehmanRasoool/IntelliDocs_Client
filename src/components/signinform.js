import { Component } from "react";
import { Link, navigate } from "react-router-dom";

export class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        this.props.history.push('/');
      } else {
        this.setState({ message: result.message });
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({ message: 'An error occurred. Please try again.' });
    }
  }


  render() {
    return (
      <main className="page-wrapper">
        <div class="signup-area rainbow-section-gapTop-big">
          <div class="sign-up-wrapper rainbow-section-gap">
            <div class="sign-up-box bg-flashlight">
              <div class="signup-box-top top-flashlight light-xl">
                <img src="../images/logo/boxed-logo.png" alt="sign-up logo" />
              </div>
              <div class="separator-animated animated-true"></div>
              <div class="signup-box-bottom">
                <div class="signup-box-content">
                  <h4 class="title">Welcome Back!</h4>
                  <div class="social-btn-grp">
                    <a class="btn-default btn-border" href="#">
                      <span class="icon-left">
                        <img
                          src="../images/sign-up/google.png"
                          alt="Google Icon"
                        />
                      </span>
                      Login with Google
                    </a>
                    <a class="btn-default btn-border" href="#">
                      <span class="icon-left">
                        <img
                          src="../images/sign-up/facebook.png"
                          alt="Google Icon"
                        />
                      </span>
                      Login with Facebook
                    </a>
                  </div>
                  <div class="text-social-area">
                    <hr />
                    <span>Or continue with</span>
                    <hr />
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-section mail-section">
                      <div className="icon">
                        <i className="feather-mail"></i>
                      </div>
                      <input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        type="email"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div className="input-section password-section">
                      <div className="icon">
                        <i className="feather-lock"></i>
                      </div>
                      <input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="forget-text">
                      <a className="btn-read-more" href="#">
                        <span>Forgot password</span>
                      </a>
                    </div>
                    <Link to={"/"}>
                    <button type="submit" className="btn-default">
                      Sign In
                    </button>
                    </Link>
                  </form>
                  {this.state.message && <p>{this.state.message}</p>}
                </div>
                <div class="signup-box-footer">
                  <div class="bottom-text">
                    Don't have an account?{" "}
                    <Link class="btn-read-more" to={"/signup"}>
                      <span>Sign Up</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}


