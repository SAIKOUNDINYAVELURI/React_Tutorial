/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const ScienceSlice=createSlice(
    {
        name:'science',
        initialState:{
           books: ['Physics','Chemistry'],
           enrolledStudentsCount:0
        },
        reducers:{
            addBook:(state,action)=>{
                state.books.push(action.payload)
            },
          
            emptyBook:(state,action)=>{
                state.books=[]
            },
            incrementEnrolledStudents:(state,action)=>{
                state.enrolledStudentsCount++

            }
        }
    }


)


export const { addBook, emptyBook,incrementEnrolledStudents}=ScienceSlice.actions;

export default ScienceSlice.reducer;