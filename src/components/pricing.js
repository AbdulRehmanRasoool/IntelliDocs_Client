import { Component } from "react";

export class Pricing extends Component {
    render() {
        return (
            <div className="rainbow-pricing-area rainbow-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" data-sal-duration="400" data-sal-delay="150">
                                <h4 className="subtitle "><span className="theme-gradient">Pricing</span></h4>
                                <h2 className="title w-600 mb--20">Commence Content Journey with AI</h2>
                                <p className="description b1">Collaborate with AI to generate content that resonates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row--15">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="rainbow-pricing style-2">
                                <div className="pricing-table-inner bg-flashlight">
                                    <div className="pricing-header">
                                        <h4 className="title">Basic</h4>
                                        <div className="pricing">
                                            <div className="price-wrapper"><span
                                                className="price">Free</span></div><span className="subtitle">Forever</span>
                                        </div>
                                    </div>
                                    <div className="separator-animated mt--30 mb--30"></div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li><i className="feather-check-circle"></i> 7,700 Words</li>
                                            <li><i className="feather-check-circle"></i> 6+ Templates</li>
                                            <li><i className="feather-check-circle"></i> 5+ Languages</li>
                                            <li><i className="feather-minus-circle"></i> AI Blog generate</li>
                                            <li><i className="feather-minus-circle"></i> Advance Editor Tool</li>
                                            <li><i className="feather-minus-circle"></i> Consistent support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer"><a className="btn-default btn-border" href="#">Try it now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="rainbow-pricing style-2 active">
                                <div className="pricing-table-inner bg-flashlight">
                                    <div className="pricing-header">
                                        <h4 className="title">Business</h4>
                                        <div className="pricing">
                                            <div className="price-wrapper"><span className="currency">$</span><span
                                                className="price">50</span></div><span className="subtitle">USD Per
                                                    Month</span>
                                        </div>
                                    </div>
                                    <div className="separator-animated animated-true mt--30 mb--30"></div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li><i className="feather-check-circle"></i> 80,000 Words</li>
                                            <li><i className="feather-check-circle"></i> 6+ Templates</li>
                                            <li><i className="feather-check-circle"></i> 5+ Languages</li>
                                            <li><i className="feather-check-circle"></i> AI Blog generate</li>
                                            <li><i className="feather-check-circle"></i> Advance Editor Tool</li>
                                            <li><i className="feather-check-circle"></i> Consistent support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer"><a className="btn-default" href="#">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="rainbow-pricing style-2">
                                <div className="pricing-table-inner bg-flashlight">
                                    <div className="pricing-header">
                                        <h4 className="title">Advanced</h4>
                                        <div className="pricing">
                                            <div className="price-wrapper"><span className="currency">$</span><span
                                                className="price">100</span></div><span className="subtitle">USD Per
                                                    Month</span>
                                        </div>
                                    </div>
                                    <div className="separator-animated mt--30 mb--30"></div>
                                    <div className="pricing-body">
                                        <ul className="list-style--1">
                                            <li><i className="feather-check-circle"></i> 80,000 Words</li>
                                            <li><i className="feather-check-circle"></i> 6+ Templates</li>
                                            <li><i className="feather-check-circle"></i> 5+ Languages</li>
                                            <li><i className="feather-check-circle"></i> AI Blog generate</li>
                                            <li><i className="feather-check-circle"></i> Advance Editor Tool</li>
                                            <li><i className="feather-check-circle"></i> Consistent support</li>
                                        </ul>
                                    </div>
                                    <div className="pricing-footer"><a className="btn-default btn-border" href="#">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-group mt--50 text-center">
                        <a className="btn-default btn-large btn-border" href="pricing.html">View Comparision</a>
                    </div>
                </div>
            </div>
        );
    }
}