import React, { Component } from 'react';
import "../Styles/MultipleImageUploadComponent.css"

export default class MultipleImageUploadComponent extends Component {

    newFiles = [];
    newInfo = [];

    uploadMultipleFiles = (e) => {      
        let files = e.target.files;
        let promises = [];

        for (let i = 0; i < files.length; i++) {
            let fileInfo = `${files[i].lastModified}-${files[i].name}-${files[i].size}`;

            if((this.props.filesInfo.indexOf( fileInfo) === -1) && (this.newInfo.indexOf( fileInfo) === -1))
            {
                this.newInfo.push( fileInfo);
                promises.push(this.readFile(files[i]));
                /*
                let reader = new FileReader();
                reader.onload = upload => {
                    this.setState({
                        files: [...this.state.files, upload.target.result]
                    });
                };
                reader.readAsDataURL(files[i]);     
                */    
            }
        }

        Promise.all(promises).then(values =>{
            this.props.onChange( [ ...this.props.base64Images, ...this.newFiles], [ ...this.props.filesInfo, ...this.newInfo]);
            this.newFiles = [];
            this.newInfo = [];    
            });
    };


    readFile(file){
        return new Promise((resolve, reject) => {
          var fr = new FileReader();  
          fr.onload = upload =>{
            this.newFiles.push(upload.target.result);
            resolve();
          };
          fr.readAsDataURL(file);
        });
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
                    {(this.props.base64Images || []).map(url => (
                        <img key={i++} src={url} alt="..." />
                    ))}
                </div>
            </div >
        );
    };
}


//base64Images={ this.state.Base64Images } filesInfo={ this.state.FilesInfo }

/*
export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)

        this.state = {
            files: []
        }
    };

    uploadMultipleFiles = (e) => {      
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

        //this.props.onChange(images,info);
    };

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
        );
    };
}


*/