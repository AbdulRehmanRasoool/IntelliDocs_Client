import { Component } from "react";

export class Faq extends Component {
    render() {
        return (
            <div className="rainbow-accordion-area rainbow-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title text-center"  >
                                <h4 className="subtitle "><span className="theme-gradient">Accordion</span></h4>
                                <h2 className="title w-600 mb--20">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--35 row--20">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="rainbow-accordion-style  accordion">
                                <div className="accordion" id="accordionExamplea">
                                    <div className="accordion-item card bg-flashlight">
                                        <h2 className="accordion-header card-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What is ChatenAI ? How does it work?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExamplea">
                                            <div className="accordion-body card-body">
                                                ChatenAI is an AI-powered messaging platform that understands and responds to your natural language queries. Ask anything you'd typically ask a human assistant—get weather updates, news, restaurant recommendations, and more!
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card bg-flashlight">
                                        <h2 className="accordion-header card-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What kind of questions can I ask ChatenAI?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExamplea">
                                            <div className="accordion-body card-body">
                                                ChatenAI, an AI-driven messaging platform, adeptly communicates with users using natural language understanding. It delivers helpful responses to your inquiries and requests.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card bg-flashlight">
                                        <h2 className="accordion-header card-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Can I get update regularly and For how long do I get updates?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExamplea">
                                            <div className="accordion-body card-body">
                                                Yes, We will get update the ChatenAI. And you can get it any time. Next
                                                time we will comes with more feature. You can be get update for
                                                unlimited times. Our dedicated team works for update.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card bg-flashlight">
                                        <h2 className="accordion-header card-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                How can I get the customer support?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExamplea">
                                            <div className="accordion-body card-body">
                                                After purchasing the product need you any support you can be share with
                                                us with sending mail to rainbowit10@gmail.com.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card bg-flashlight">
                                        <h2 className="accordion-header card-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                HIs my data safe with ChatenAI?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExamplea">
                                            <div className="accordion-body card-body">
                                                Feel free to toss any questions at chatenAI, just like you would with a human helper—whether it's about the weather, the latest news, restaurant suggestions, or anything else you fancy!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item card bg-flashlight">
                                        <h2 className="accordion-header card-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Is ChatenAI available in multiple languages?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExamplea">
                                            <div className="accordion-body card-body">
                                                Yes, ChatenAI is designed to support multiple languages, offering a versatile and inclusive communication experience for users worldwide.
                                            </div>
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