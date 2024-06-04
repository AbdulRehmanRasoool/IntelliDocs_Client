import { Component } from "react";
import { Link } from "react-router-dom";

export class SignInForm extends Component {
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
                  <form>
                    <div class="input-section mail-section">
                      <div class="icon">
                        <i class="feather-mail"></i>
                      </div>
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div class="input-section password-section">
                      <div class="icon">
                        <i class="feather-lock"></i>
                      </div>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div class="forget-text">
                      <a class="btn-read-more" href="#">
                        <span>Forgot password</span>
                      </a>
                    </div>
                    <button type="submit" class="btn-default">
                      Sign In
                    </button>
                  </form>
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
