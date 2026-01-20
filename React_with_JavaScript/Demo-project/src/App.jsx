
import { Component } from 'react'
import './App.css'
import team from './Data/data'
import MemberCard from './Components/TeamMemberCard'
import MyChannelVideos from './Components/Videos'
import StatesDemo from './Components/StatesDemo'
let videos=["Trailer Analysis","Movie Reviews","Ipl Auction Discussions","Ipl Playing 11 and Team Combinations Discussions","Cricket Analytics"]

function App() {


  return (
    <>
    <h1>Hey Guys this is My team</h1>
    {
      team.map(memeber=>{
        return <MemberCard key={memeber.id} name={memeber.name} role={memeber.role}/>
      })
    }

    <div>
      <h1>My Channel Component</h1>
      {
        videos.map((video ,index)=>{
          return <li key={index}>{video}</li>
        })
      }

      <MyChannelVideos/>
    </div>
    
    <div>
      <h1>States Demo</h1>
      <StatesDemo userName="John"/>
    </div>
    
    </>
  )
}

export default App
