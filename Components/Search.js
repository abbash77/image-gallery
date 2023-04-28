import React,{useRef} from 'react'
import classes from './Search.module.css'

const Search = (props) => {
  const searchInputRef=useRef()
  const submitHandler=(event)=>{
    event.preventDefault();
    // if(searchInputRef.current.value.trim().length===0){
    //   return;
    // }
    props.onSubmit(searchInputRef.current.value)
    console.log(searchInputRef.current.value)
  }
  return (
    // <div >
      <form className={classes.main} onSubmit={submitHandler}>
        <label htmlFor='search'/>
        <input ref={searchInputRef} type='text' id='search'></input>
        <button>Search</button>
      </form>
        
    // </div>
    
  )
}

export default Search