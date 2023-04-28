import React,{Fragment, useState} from 'react'
import classes from './ImageItem.module.css'
import Modal from './Modal/Modal'
import Image from "next/image";
const ImageItem = ({url,desc,id,key,func}) => {
  const [isClicked,setIsClicked]=useState(false)

  const imgClickHandler=()=>{
    console.log('clicked')
    setIsClicked(true)
  }
  const clickBD=()=>{
    setIsClicked(false)
  }
  if(url===""){

  }
  return (
    <Fragment>
      {isClicked&&<Modal clickBD={clickBD} src={url} desc={desc}/>}
      <div className={classes.main}>
        <Image alt='haider' className={classes.img} draggable={true} width={0} height={0} onClick={imgClickHandler} src={url}  onDragStart={func}/>

        {/* <img draggable="true" onDragStart={func}  onClick={imgClickHandler} src={url} /> */}
        <p>{desc}</p>
    </div>

    </Fragment>
    
  )
}

export default ImageItem