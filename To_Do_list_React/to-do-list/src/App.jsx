import { useState } from 'react'
import './App.css'
import TaskItem from './Components/TaskItem'

function App() {
  
 const [newTask,setNewTask]=useState("");
 const[myTasks,setMyTask]=useState(["Complete Stranger things Series","WatchIpl Auction 2026 ","Watch Akhanda 2"])
 const [completedTask,setCompletion]=useState([])
 function handleInput(e)
 {
  let newValue=e.target.value;
  setNewTask(newValue);
 }
 function addTask()
 {
 
  setMyTask(prev=>[...prev,newTask])
  setNewTask("")
 }
 function deleteTask(taskName)
 {
  let afterDeletion=myTasks.filter(x=>x!=taskName)
  setMyTask(afterDeletion)
 }
  function CompleteTask(taskName)
 {
  let afterCompletion=myTasks.filter(x=>x==taskName)
  let afterFiltering=myTasks.filter(x=>x!=taskName )
  setMyTask(afterFiltering)
  setCompletion(prev=>[...prev,afterCompletion[0]])
  console.log("Completed tasks: ",completedTask)
 }
  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className="todolistmain">
      <h2>My To do List</h2>
      <br></br>
      <div>
      <div className='todo-task-input-div'>
        <div className="form-floating w-85">
  <input type="text" className="form-control" id="floatingInput" placeholder="ToDo task" onChange={(e)=>{
    handleInput(e)
  }} value={newTask}/>
  <label htmlFor="floatingInput">Todo task</label>
        </div>
        <button className='btn btn-primary btn-sm w-15' id='add-button' onClick={()=>addTask()}>+</button>
      </div>
      <hr></hr>
      <br></br>
      <h3>To be Completed</h3>
        <ul className='task-list'>
          {
            myTasks.map((task,index)=>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} CompleteTask={CompleteTask} tobeComplete={true}/>

          )
          }
        </ul>
        <hr>
        </hr>
        <br>
        </br>
<h3>Completed</h3>
        <ul className='task-list'>
          {
            completedTask.map((task,index)=>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} CompleteTask={CompleteTask} tobeComplete={false}/>

          )
          }
        </ul>
      </div>
      </div>
    </div>
  )
}

export default App
