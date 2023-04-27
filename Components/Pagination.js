import React from "react";
import classes from "./Pagination.module.css";
const Pagination = ({ postsPerPage, totalPosts,paginate,currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
      <ul className={classes.main}>
        {pageNumbers.map((number) => {
          if(number===currentPage){
            return <li onClick={()=>paginate(number)} className={`${classes.btn} ${classes.current}`}  key={number}>{number}</li>;
          }
          return <li onClick={()=>paginate(number)} className={classes.btn} key={number}>{number}</li>;
        })}
      </ul>
  );
};

export default Pagination;
