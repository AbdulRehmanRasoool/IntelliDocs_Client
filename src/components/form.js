import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const { name, email, password, confirmPassword } = this.state;
        
        if (password !== confirmPassword) {
            this.setState({ message: 'Passwords do not match!' });
            return;
        }

        const userData = {
            name,
            email,
            password,
            isActive: true,
            isDeleted: false
        };

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            this.setState({ message: result.message });
        } catch (error) {
            console.error('Error:', error);
            this.setState({ message: 'An error occurred. Please try again.' });
        }
    }

    render() {
        return (
            <div className="signup-area rainbow-section-gapTop-big">
                <div className="sign-up-wrapper rainbow-section-gap">
                    <div className="sign-up-box bg-flashlight">
                        <div className="signup-box-top top-flashlight light-xl">
                            <img src="../images/logo/boxed-logo.png" alt="sign-up logo" />
                        </div>
                        <div className="separator-animated animated-true"></div>
                        <div className="signup-box-bottom">
                            <div className="signup-box-content">
                                <h4 className="title">Welcome Back!</h4>
                                <div className="social-btn-grp">
                                    <a className="btn-default btn-border" href="#">
                                        <span className="icon-left"><img src="../images/sign-up/google.png" alt="Google Icon" /></span>Login with Google
                                    </a>
                                    <a className="btn-default btn-border" href="#">
                                        <span className="icon-left"><img src="../images/sign-up/facebook.png" alt="Facebook Icon" /></span>Login with Facebook
                                    </a>
                                </div>
                                <div className="text-social-area">
                                    <hr />
                                    <span>Or continue with</span>
                                    <hr />
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-section mail-section">
                                        <div className="icon"><i className="feather-user"></i></div>
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="Enter Your Name" 
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="input-section mail-section">
                                        <div className="icon"><i className="feather-mail"></i></div>
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="Enter email address" 
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="input-section password-section">
                                        <div className="icon"><i className="feather-lock"></i></div>
                                        <input 
                                            type="password" 
                                            name="password"
                                            placeholder="Create Password" 
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="input-section password-section">
                                        <div className="icon"><i className="feather-lock"></i></div>
                                        <input 
                                            type="password" 
                                            name="confirmPassword"
                                            placeholder="Confirm Password" 
                                            value={this.state.confirmPassword}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn-default">Sign Up</button>
                                </form>
                                {this.state.message && <p>{this.state.message}</p>}
                            </div>
                            <div className="signup-box-footer">
                                <div className="bottom-text">
                                    If you have an account <Link className="btn-read-more" to={"/signin"}><span>Sign In</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
