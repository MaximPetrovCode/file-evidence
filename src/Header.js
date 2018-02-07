import React, { Component } from 'react'
import hash from 'object-hash';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listFile: [],
            hashFile: "",
            name: "",
            timestamp: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }



    handleChange(selectorFiles) {
        // console.log(selectorFiles);
        // console.log(hash(selectorFiles.toString()));
        var currentTime = Date();
        this.setState({ hashFile: hash(selectorFiles[0].size + selectorFiles[0].name + selectorFiles[0].type + selectorFiles[0].lastModified + selectorFiles[0].lastModifiedDate) });
        this.setState({ name: selectorFiles[0].name });
        this.setState({ timestamp: currentTime });

        this.setState({
            listFile: this.state.listFile.concat({
                name: selectorFiles[0].name,
                hashFile: hash(selectorFiles[0].size + selectorFiles[0].name + selectorFiles[0].type + selectorFiles[0].lastModified + selectorFiles[0].lastModifiedDate),
                timestamp: currentTime
            })
        })

        console.log(currentTime);

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
                    <td>
                        {file.timestamp}
                    </td>
                </tr>
            )
        })
    }


    renderTable() {
        if (this.state.listFile.length > 0) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="text-left">
                                <h3>
                                     
                                    <label htmlFor="hash">Hash:</label>
                                    <div id="hash">{this.state.hashFile}</div>
                                </h3>
                                <h4>
                                    <label htmlFor="name">File:</label> 
                                    <div id="name">{this.state.name}</div>
                                </h4>
                                <h4>
                                    <label htmlFor="time">Timestamp:</label>
                                    <div id="time">{this.state.timestamp}</div>
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>


                    <br />


                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-bordered table-md-responsive">
                                    <thead>
                                        <tr>
                                            <th><h4>File Name</h4></th>
                                            <th><h4>Hash</h4></th>
                                            <th><h4>Timestamp</h4></th>
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
            )
        }
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



                        {this.renderTable()}

                    </div>
                </header>
            </div>
        )
    }
}
