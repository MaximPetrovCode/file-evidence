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
            timestamp: "",
            exists: {},
        }

        this.handleChange = this.handleChange.bind(this);
    }



    async handleChange(selectorFiles) {

        var fileHash = await hash(selectorFiles[0].size + selectorFiles[0].name + selectorFiles[0].type + selectorFiles[0].lastModified + selectorFiles[0].lastModifiedDate);

        if (this.checkExistence(fileHash)) {
            var currentTime = Date();
            this.setState({ hashFile: fileHash });
            this.setState({ name: selectorFiles[0].name });
            this.setState({ timestamp: currentTime });

            this.setState({
                listFile: this.state.listFile.concat({
                    name: selectorFiles[0].name,
                    hashFile: fileHash,
                    timestamp: currentTime
                })
            })
        }
        else {
            this.setState({ exists: selectorFiles })
        }

    }

    checkExistence(fileHash) {
        for (const object in this.state.listFile) {
            if (this.state.listFile.hasOwnProperty(object)) {
                const element = this.state.listFile[object];
                if (element.hashFile === fileHash) {
                    return false;
                }
            }
        }

        return true;
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


    renderCurrentFile() {
        if (this.state.exists !== []) {
            return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="text-left">
                        <h3>
                            <label htmlFor="hash">Hash:</label>
                            <div id="hash">{this.state.exists[0]}</div>
                        </h3>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>);

        }
        else {
            return (
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
            );
        }

    }


    renderTable() {
        if (this.state.listFile.length > 0) {
            return (
                <div>

                    {this.renderCurrentFile()}

                    <br />

                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-md-responsive">
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
