import React, { Component } from 'react';
import "../Styles/MultipleImageUploadComponent.css"

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)

        this.state = {
            files: []
        }

        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {      
        let files = e.target.files;

        for (let i = 0; i < files.length; i++) {

            let fileInfo = `${files[i].lastModified}-${files[i].name}-${files[i].size}`;

            if(this.fileArray.indexOf( fileInfo) == -1)
            {
                this.fileArray.push( fileInfo);

                let reader = new FileReader();
                reader.onload = upload => {
                    this.setState({
                        files: [...this.state.files, upload.target.result]
                    });
                };

                reader.readAsDataURL(files[i]);         
            }
        }
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.files)
    }

    render() {
        let i = 0;
        return (
            <div className="MultipleImageUploadComponent">
                <div className="upload-btn-wrapper">
                    <button className="btn">Upload a file</button>
                    <input type="file" className="" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <div className="">
                    {(this.state.files || []).map(url => (
                        <img key={i++} src={url} alt="..." />
                    ))}
                </div>
            </div >
        )
    }
}




/*
export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)

        this.state = {
            file: [null]
        }

        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[this.fileObj.length - 1].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        let i = 0;
        return (
            <div className="MultipleImageUploadComponent">
                <div className="">
                    <input type="file" className="" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <div className="">
                    {(this.fileArray || []).map(url => (
                        <img key={i++} src={url} alt="..." />
                    ))}
                </div>
                <button type="button" className="" onClick={this.uploadFiles}>Upload</button>
            </div >
        )
    }
}
*/