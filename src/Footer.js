import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-5 mb-lg-0">

                            </div>
                            <div className="col-md-4 mb-5 mb-lg-0">
                                <h4 className="text-uppercase mb-4">Around the Web</h4>
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i className="fa fa-fw fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i className="fa fa-fw fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i className="fa fa-fw fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i className="fa fa-fw fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i className="fa fa-fw fa-dribbble"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">

                            </div>
                        </div>
                    </div>
                </footer>


                <div className="scroll-to-top d-lg-none position-fixed ">
                    <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                        <i className="fa fa-chevron-up"></i>
                    </a>
                </div>
            </div>
        )
    }
}
