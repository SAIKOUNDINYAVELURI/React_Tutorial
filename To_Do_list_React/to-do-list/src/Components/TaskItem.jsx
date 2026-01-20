import React from "react";
import '../App.css'

function TaskItem({taskName,deleteTask,CompleteTask,tobeComplete}){
    return(
        <>
        <li className='task d-flex justify-content-between'>{taskName}
            <div className='task-button w-50 d-flex justify-content-end'>
                {
                   tobeComplete && <div className="Buttons"><button className='btn btn-sm btn-success'onClick={()=>{CompleteTask(taskName)}}>Complete</button>
                <button className='btn btn-sm btn-danger' onClick={()=>{deleteTask(taskName)}}>Delete</button></div>
                }
              
            </div>
          </li>
        </>
    );
}

export default TaskItem;