import React from "react";
import { useState,useEffect } from "react";

function StatesDemo({userName})
{
    const [videoName, setVideoName]=useState("Movie Reviews")
    const [videoLikes, setVideoLikes]=useState(95)
    const[videoComment, setVideoComment]=useState("")
    useEffect(()=>{
        console.log("Component Rendered")
    },[])
    useEffect(()=>{
        console.log("Video Likes Updated")
    },[videoLikes])

    return(
        <>
        <h3>Video Name: {videoName}</h3>
        <h3>Likes: {videoLikes}</h3>
        <button onClick={()=>{setVideoLikes(videoLikes+1)}}>Like</button>
        <button onClick={()=>{setVideoLikes(videoLikes-1)}}>DisLike</button>
        {
            videoLikes>=100 &&
            <p>Yayy!! Record Likes</p>
        }
        {
            videoLikes<100?
            <p>Near to Record Likes</p>:<p>Record likes</p>
        }
        <form action="">
            <label htmlFor="video-comment">Video Comment</label>
            <input type="text" name="video-comment" value={videoComment} 
            onChange={(e)=>{
                console.log(e.target.value)
                setVideoComment(e.target.value)
            }}
            />
        </form>

        <h1>Prop Drilling</h1>
        <ChildComponent userName={userName}></ChildComponent>

        </>
    )
}
function ChildComponent({userName}){
    return(
        <>
        <h2>Hello, {userName}</h2>
        </>
    )
}
export default StatesDemo;