import React,{useRef} from "react";
import classes from './FileUpload.module.css'

const FileUpload = (props) => {
    const formRef=useRef()
    const onChangeHandler = (event) => {
      if (!event.target.files?.length) {
        return;
      }
  
      const formData = new FormData();
  
      // Array.from(event.target.files).forEach((file, index) => {
      //   formData.append(event.target.name, file);
      // });
      formData.append("abbas", event.target.files[0])


      props.onChange(formData);
  
      formRef.current?.reset();
    };
  
    
  return (
    <form ref={formRef} className={classes.main}>
      <input name={props.name} onChange={onChangeHandler} type="file" multiple />
      <button>Upload</button>
    </form>
  );
};

export default FileUpload;
