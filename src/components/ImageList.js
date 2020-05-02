import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = props => {
    const images= props.images.map((image) => {//image is an object
        return <ImageCard key={image.id} image={image}/>//{image is passed as a prop}
    });
return <div className= 'image-list'> {images}</div>;
};

export default ImageList;