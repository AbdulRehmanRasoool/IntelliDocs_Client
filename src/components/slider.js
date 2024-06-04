import React, { Component } from 'react';

export class Slider extends Component {
    render() {
        return (
            <div className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1">
                <div className="bg-blend-top bg_dot-mask"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="inner text-center mt--60">
                                <h1 className="title display-one">
                                    Unlock The Power Of <br />
                                    <span className="theme-gradient">ChatenAI AI</span> With <br />
                                    <span className="color-off">Smartest AI</span>
                                </h1>
                                <p className="b1 desc-text">
                                    AI-Powered Copywriting A Game-Changer in Content Creation.
                                </p>
                                <div className="button-group">
                                    <a
                                        className="btn-default bg-light-gradient btn-large"
                                        href="text-generator.html"
                                    >
                                        <div className="has-bg-light"></div>
                                        <span>Start writing for free</span>
                                    </a>
                                </div>
                                <p className="color-gray mt--5">💳 No credit card required!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

