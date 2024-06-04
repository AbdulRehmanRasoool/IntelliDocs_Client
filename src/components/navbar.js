import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Navbar extends Component {

    render() {
        return (
            <div>
                <header className="rainbow-header header-default header-not-transparent header-sticky">
                    <div className="container position-relative">
                        <div className="row align-items-center row--0">
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="logo">
                                    <a href="index.html">
                                        <img className="logo-light" src="images/logo/logo.png" alt="ChatBot Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-6 col-6 position-static">
                                <div className="header-right">

                                    <nav className="mainmenu-nav d-none d-lg-block">
                                        <ul className="mainmenu">
                                            <li><NavLink to={"/home"}>Home</NavLink></li>
                                            <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
                                        </ul>
                                    </nav>
                                    <div className="header-btn">
                                        <NavLink className="btn-default btn-small round" to={"/signup"}>Sign Up</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="popup-mobile-menu">
                    <div className="inner-popup">
                        <div className="header-top">
                            <div className="logo">
                                <a href="index.html">
                                    <img className="logo-light" src="images/logo/logo.png" alt="Corporate Logo" />
                                    <img className="logo-dark" src="images/logo/logo-dark.png" alt="Corporate Logo" />
                                </a>
                            </div>
                            <div className="close-menu">
                                <button className="close-button">
                                    <i className="feather-x"></i>
                                </button>
                            </div>
                        </div>

                        <div className="content">
                            <ul className="mainmenu">
                                <li><a href="dashboard.html">Welcome</a></li>
                                <li className="with-megamenu has-menu-child-item position-relative"><a href="#">Dashboard</a>
                                </li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><a href="signin.html">Sign In</a></li>
                            </ul>








                            <div className="rbt-sm-separator"></div>
                            <div className="rbt-default-sidebar-wrapper">
                                <nav className="mainmenu-nav">
                                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                        <li><a href="dashboard.html"><i className="feather-monitor"></i><span>Welcome</span></a></li>
                                        <li><a href="plans-billing.html"><i className="feather-briefcase"></i><span>Manage Subsription</span></a></li>
                                    </ul>
                                    <div className="rbt-sm-separator"></div>
                                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                        <li><a href="text-generator.html"><img src="images/generator-icon/text.png" alt="AI Generator" /><span>Text Generator</span></a></li>
                                        <li><a href="image-generator.html"><img src="images/generator-icon/photo.png" alt="AI Generator" /><span>Image Generator</span>
                                            <div className="rainbow-badge-card badge-sm ml--10">Hot</div>
                                        </a></li>
                                        <li><a href="code-generator.html"><img src="images/generator-icon/code-editor.png" alt="AI Generator" /><span>Code Generator</span></a></li>
                                        <li><a href="image-editor.html"><img src="images/generator-icon/photo-editor.png" alt="AI Generator" /><span>Image Editor</span></a></li>
                                        <li><a href="vedio-generator.html"><img src="images/generator-icon/video-camera.png" alt="AI Generator" /><span>Vedio Generator</span></a></li>
                                        <li><a href="email-generator.html"><img src="images/generator-icon/email.png" alt="AI Generator" /><span>Email Generator</span></a></li>
                                        <li><a tabIndex="-1" className="disabled" aria-disabled="true" role="button"><img src="images/generator-icon/website-design.png" alt="AI Generator" /><span>Website Generator</span></a></li>
                                    </ul>
                                </nav>

                                <div className="rbt-sm-separator"></div>

                                <nav className="mainmenu-nav">
                                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                        <li className="has-submenu"><a className="collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseExampleMenu" role="button" aria-expanded="false" aria-controls="collapseExampleMenu"><i className="feather-plus-circle"></i><span>Setting</span></a>
                                            <div className="collapse" id="collapseExampleMenu">
                                                <ul className="submenu rbt-default-sidebar-list">
                                                    <li>
                                                        <a href="profile-details.html">
                                                            <i className="feather-user"></i>
                                                            <span>Profile Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="notification.html">
                                                            <i className="feather-shopping-bag"></i>
                                                            <span>Notification</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="chat-export.html">
                                                            <i className="feather-users"></i>
                                                            <span>Chat Export</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="appearance.html">
                                                            <i className="feather-home"></i>
                                                            <span>Apperance</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="plans-billing.html">
                                                            <i className="feather-briefcase"></i>
                                                            <span>Plans and Billing</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="sessions.html">
                                                            <i className="feather-users"></i>
                                                            <span>Sessions</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="application.html">
                                                            <i className="feather-list"></i>
                                                            <span>Application</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#"><i className="feather-award"></i><span>Help & FAQ</span></a></li>
                                    </ul>
                                    <div className="rbt-sm-separator"></div>
                                    <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                        <li><a href="release-notes.html"><i className="feather-bell"></i><span>Release notes</span></a></li>
                                        <li><a href="terms-policy.html"><i className="feather-briefcase"></i><span>Terms & Policy</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-btn d-block d-md-none">
                            <a className="btn-default @@btnclassName" target="_blank" href="text-generator.html">Get Started Free</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}