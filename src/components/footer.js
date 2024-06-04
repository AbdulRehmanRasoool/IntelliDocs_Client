import { Component } from "react";

export class Footer extends Component {
    render() {
        return (
            <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
                <div className="chatenai-separator has-position-top">
                    <img className="w-100" src="images/separator/separator-top.svg" alt="" />
                </div>
                <div className="footer-top">
                    <div className="container">
                        <div className="row justify-content-center mb--30">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="rainbow-footer-widget text-center">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img className="logo-light" src="images/logo/logo.png" alt="Corporate Logo" />
                                            <img className="logo-dark" src="images/logo/logo-dark.png" alt="Corporate Logo" />
                                        </a>
                                    </div>
                                    <p className="b1 text-center mt--20 mb--0">Create Website By ChatenAI So Quick Download And Make Your Site.</p>
                                </div>
                            </div>
                        </div>
                        <div className="separator-animated animated-true mt--50 mb--50"></div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="rainbow-footer-widget">
                                    <h4 className="title">Newsletter</h4>
                                    <div className="inner">
                                        <h6 className="subtitle">2000+ Our clients are subscribe Around the World</h6>
                                        <form className="newsletter-form" action="#">
                                            <div className="form-group">
                                                <input type="email" placeholder="Enter Your Email Here" />
                                                <button className="btn-default bg-solid-primary" type="submit"><i className="feather-arrow-right"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rainbow-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">Services</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li><a href="#">Testiminial</a></li>
                                                <li><a href="#">Company</a></li>
                                                <li><a href="#">Marketing</a></li>
                                                <li><a href="#">Startup</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rainbow-footer-widget">
                                    <div className="widget-menu-bottom">
                                        <h4 className="title">Products</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Portfolio</a></li>
                                                <li><a href="#">Contact</a></li>
                                                <li><a href="#">Service</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rainbow-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">Company</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li><a href="#">Corporate</a></li>
                                                <li><a href="#">Portfolio</a></li>
                                                <li><a href="#">SEO Agency</a></li>
                                                <li><a href="#">Web Agency</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rainbow-footer-widget">
                                    <div className="widget-menu-bottom">
                                        <h4 className="title">Solutions</h4>
                                        <div className="inner">
                                            <ul className="footer-link link-hover">
                                                <li><a href="#">Gallery</a></li>
                                                <li><a href="#">Testimonial</a></li>
                                                <li><a href="#">Contact</a></li>
                                                <li><a href="#">Service</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}