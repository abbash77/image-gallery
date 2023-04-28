import Head from "next/head";
import Image from "next/image";
import axios from 'axios';
import { Inter } from "next/font/google";
import Search from "@/Components/Search";
import ImageList from "@/Components/ImageList";
import Card from "@/Components/UI/Card";
import FileUpload from "@/Components/FileUpload";
import { MongoClient } from "mongodb";
import { useState } from "react";
// import Image from 'next/image';
import Pagination from "@/Components/Pagination";

// let imagePaths = getImagePaths(directory);

// let images = [];
// imagePaths.map((path) => images.push(require("../" + path)));

// const image = [
//   {
//     url: "https://images.unsplash.com/photo-1682250540446-4a134ca88396?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
//     description: "A beautiful sky",
//     id:"m1"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1682070367570-bc4165cfd488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     description: "Three Sisters in Blue Mountains National Park",
//     id:"m2"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1682146258057-e04d1eda546e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
//     description: "A mountain face at civil sunrise ",
//     id:"m3"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     description: "Into the Clouds",
//     id:"m4"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1682085191017-4f8262731a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     description: "Kalanchoe flower blossoms",
//     id:"m5"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1589186118523-34c03029a4b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
//     description: "Textured fir leaves",
//     id:"m6"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1682084930277-c9227a691e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80",
//     description: "Crown",
//     id:"m7"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1681922442525-40c06756c8e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     description: "Beautiful flowers",
//     id:"m8"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1682160778546-5b7209af0efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80",
//     description: "Wavy leaves",
//     id:"m9"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1682016149111-b6f316f6133c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
//     description: "Over the mountains",
//     id:"m10"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1681532639984-edb0790487d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80",
//     description: "Morning at the mountain lake in South Tyrol",
//     id:"m11"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1680554692591-7b3df1de8cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
//     description: "The mysterious cave",
//     id:"m12"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1679199685253-5041e82a4600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     description: "The sun is life",
//     id:"m13"
//   },
//   {
//     url: "https://images.unsplash.com/photo-1680897452990-5e6b12eb2cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
//     description: "In the forest",
//     id:"m14"
//   },
// ];

export default function Home(props) {
  const [data,setData]=useState(props.image)
  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage,setPostsPerPage]=useState(3)


  const submitHandler=(val)=>{
    if(val.trim()===""){
      setData(props.image)
      return
    }
    setCurrentPage(1)
    const filteredData=props.image.filter((item=>{
      return item.description.toLowerCase().trim()===val.toLowerCase().trim()
    }))
    setData(filteredData)
  }
  const onChange = async (formData) => {
    // const config = {
    //   headers: { 'content-type': 'multipart/form-data' },
    //   onUploadProgress: (event) => {
    //     console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    //   },
    // };
    // console.log(formData)
    // const response = await axios.post('/api/upload2', formData, config);

    const response = await fetch('/api/upload2', {
      method: 'POST',
      body: formData
      // headers:{
      //   'content-type': 'multipart/form-data'
      // }
    });
    const data=await response.json()
    console.log(data)

    // console.log('response',data.message);
  };
  const indexOfLastPage=currentPage*postsPerPage
  const indexOfFirstPage=indexOfLastPage-postsPerPage
  const currentPosts=data.slice(indexOfFirstPage,indexOfLastPage)  
  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  
  
  return (
    <Card>
      <Search onSubmit={submitHandler} />
      <FileUpload onChange={onChange} name="abbas" />
      <ImageList currentPage={currentPage} postsPerPage={postsPerPage} setData={setData} imgAll={data} imgList={currentPosts}/>
      <Pagination  postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} currentPage={currentPage}/>
    </Card>
  );
}


export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://abbash7:abbasH123@cluster0.jrhha.mongodb.net/image-gallery"
  );
  const db = client.db();

  const meetupsCollection = db.collection("datas");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      image: meetups.map((meetup) => ({
        url: meetup.url,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}