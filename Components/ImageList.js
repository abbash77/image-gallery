import React, { useState } from "react";
import ImageItem from "./ImageItem";
import classes from "./ImageList.module.css";

const ImageList = (props) => {
  if (props.imgList.length === 0) {
    return (
      <div className={classes.noDataFound}>
        No Images with given input found
      </div>
    );
  }
  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };

  const handleDrop = (event, index) => {
    index=index+(props.currentPage-1)*props.postsPerPage
    const sourceIndex = parseInt(event.dataTransfer.getData("index"))+(props.currentPage-1)*props.postsPerPage;
    // parseInt(sourceIndex)
    console.log(sourceIndex+6)
    console.log(index)
    const newImages = [...props.imgAll];
    const temp = newImages[index];
    newImages[index] = newImages[sourceIndex];
    newImages[sourceIndex] = temp;
    props.setData(newImages);
  };

  return (
    <div className={classes.main}>
      {props.imgList.map((item, index) => {

        return <div
          key={item.id}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => handleDrop(event, index)}
          
        >
          <ImageItem
            url={item.url}
            desc={item.description}
            id={item.id}
            func={(event) => handleDragStart(event, index)}
          />
        </div>;
      })}
    </div>
  );
};

export default ImageList;
