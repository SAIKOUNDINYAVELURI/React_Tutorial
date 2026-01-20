import React from "react";
import axios from 'axios'
import { useState } from "react";
import axiosInstance from "../Utils/AxiosInstance";

function Home()
{
    const [data,setData]=useState([]);
    async function fetchData(){
        let response=await axiosInstance.get("/posts");
        console.log(response.data);
        setData(response.data);
    }
    async function deleteData(id) {
        let response=await axiosInstance.delete(`/post/${id}`);
        console.log(response);
        setData(data.filter(post=>post.id!==id));
        
    }
    async function NewPost() {
    try {
        const response = await axiosInstance.post(
            "/newPost",
            {
                title: "Axios-Demo",
                body: "Axios Tutorial",
                userId: 56,
            }
        );

        console.log(response.data);
        setData([...data, response.data]);

    } catch (error) {
        console.error("Error creating post:", error);
    }
}

async function UpdateData(id) {
     let response=await axiosInstance.put(`/post/${id}`,{
        title:"Varanasi",
        body:"Super Star Mahesh babu plays as Rudra and Lord Rama"
     });
     console.log(response.data)
     setData(data.map(post=>post.id===id?{...post,title:response.data.title,body:response.data.body}:post))
    
}



    return(
        <>
        <h1>Home Page</h1>
        <p>Welcome to Home Page</p>
        <div style={{background:"black",color:"wheat"}}>
            title= "Axios-Demo"
            body= "Axios Tutorial"
            id="101"
        </div><br/>
        <button onClick={fetchData}>Fetch data</button><br/><br/>
        <button onClick={NewPost}>Create Post</button>
        {
            data.map((post)=>{
                return(
                    <div key={post.id} style={{border:"1px solid black",margin:"10px",padding:"10px",width:"300px"}}>
                        <p>{post.id}</p>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button style={{background:'blue', color:"white"}} onClick={()=>{UpdateData(post.id)}}>Update</button><br/><br/>
                        <button style={{background:'red', color:"white"}} onClick={()=>{deleteData(post.id)}}>Delete</button>

                    </div>
                )
            })
        }
        
    </>

    )
    
}

export default Home;