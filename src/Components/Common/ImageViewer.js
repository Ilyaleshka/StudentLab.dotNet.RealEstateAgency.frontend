import React from 'react';
import Lightbox from 'react-image-gallery';
import "../Styles/ImageViewer.css" 
import "react-image-gallery/styles/css/image-gallery.css";

export default class ImageViewer extends React.Component {

    state = {isVisisble: true}

    constructor(){
        super();
        //const [ visible, setVisible ] = React.useState(false);
    }

    setVisible = (isVis) => {this.setState({isVisisble: isVis})};

    render() {
        let i = 0;
        
        if((!this.props.images) || (this.props.images.length === 0))
            return null;

        console.log(this.props.images.length);

        var imgs = this.props.images.map((el) => {return { original: el, thumbnail: el}});

        return (
            <div className="ImageViewer">
                <Lightbox items={imgs } 
                thumbnailWidth='100px'
                thumbnailHeight='100px'/>
            </div >
        );
    };
}


const App = () => (
  <div>
    <Lightbox images={
      [
        {
          src: 'some image url',
          title: 'image title',
          description: 'image description'
        }
      ]
    }/>
  </div>
);
/* 
[
    { src: '../images/photo-1.jpg' },
    { src: '../images/photo-2.jpg' }
]
*/
