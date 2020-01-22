import React, { Component } from 'react';
import  Carousel from "react-images";

export default class ImageViewer extends Component {

    render() {
        let i = 0;
        if(!this.props.images)
            return null;
        var images = this.props.images.map((el) => {return {source: el}});
        return (
            <div className="ImageViewer">
                <Carousel
                    views={ images}/>
            </div >
        );
    };
}

/* 
[
    { src: '../images/photo-1.jpg' },
    { src: '../images/photo-2.jpg' }
]
*/