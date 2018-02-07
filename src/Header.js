import React, { Component } from 'react'
import hash from 'object-hash';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listFile: [],
            hashFile: "",
            name: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(selectorFiles) {
        console.log(selectorFiles);
        // console.log(hash(selectorFiles.toString()));
        this.setState({ hashFile: hash(selectorFiles[0].size + selectorFiles[0].name + selectorFiles[0].type + selectorFiles[0].lastModified + selectorFiles[0].lastModifiedDate) });
        this.setState({ name: selectorFiles[0].name });

        this.setState({
            listFile: this.state.listFile.concat({
                name: selectorFiles[0].name,
                hashFile: hash(selectorFiles[0].size + selectorFiles[0].name + selectorFiles[0].type + selectorFiles[0].lastModified + selectorFiles[0].lastModifiedDate)
            })
        })

    }


    renderListFile() {
        var arr = this.state.listFile.reverse();
        return arr.map(file => {
            return (
                <tr>
                    <td>
                        {file.name}
                    </td>
                    <td>
                        {file.hashFile}
                    </td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div>
                <header className="masthead bg-primary text-white text-center">
                    <div className="container">
                        <img className="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt="" />
                        <h1 className="text-uppercase mb-0">Patent everything</h1>
                        <hr className="star-light" />

                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1"></span>

                            <label for="files" className="btn btn-primary btn-block">Select file</label>
                            <input onChange={(e) => this.handleChange(e.target.files)} type="file" id="files" />

                        </div>
                        <br />
                        <h2>Last file:</h2>
                        <strong>
                            <h3>
                                Hash: {this.state.hashFile}
                            </h3>
                            <h4>
                                File: {this.state.name}
                            </h4>
                        </strong>


                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-md-responsive">
                                        <thead>
                                            <tr>
                                                <th><h4>File Name</h4></th>
                                                <th><h4>Hash</h4></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderListFile()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        )
    }


}
