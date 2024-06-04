import { Component } from "react";

export class Content extends Component {
    render() {
        return (
            <div className="rainbow-split-area rainbow-section-gap">
                <div className="container">
                    <div className="rainbow-splite-style">
                        <div className="split-wrapper">
                            <div className="row g-0 radius-10 align-items-center">
                                <div className="col-lg-12 col-xl-6 col-12">
                                    <div className="thumbnail">
                                        <img className="radius" src="images/split/split-8.png" alt="split Images" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6 col-12">
                                    <div className="split-inner">
                                        <h4 className="title" data-sal-duration="400" data-sal-delay="200">Instant Content with AI</h4>
                                        <p className="description" data-sal-duration="400" data-sal-delay="300">Unlock Conversion-Driven Content: Business Bios, Facebook Ads, Product Descriptions, Emails, Landing Pages, Social Ads, and Beyond.</p>
                                        <ul className="split-list" data-sal-duration="400" data-sal-delay="350">
                                            <li>- Craft Articles in Under 20 Seconds.</li>
                                            <li>- Reclaim Hundreds of Valuable Hours with AI</li>
                                            <li>- Elevate Copywriting with Rewriter.</li>
                                        </ul>
                                        <div className="view-more-button mt--35" data-sal-duration="400" data-sal-delay="400">
                                            <a className="btn-default" href="contact.html">Contact With Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}