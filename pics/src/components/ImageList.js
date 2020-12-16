import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // console.log(props.images);

  // Implementing keys -> add to root element
  const images = props.images.map((image) => {
    // <img alt={description} key={id} src={urls.regular} />
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
