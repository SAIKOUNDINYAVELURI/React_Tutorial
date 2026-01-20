
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { addbook,emptyBooks } from './store/slice/SocialSlice';
import { addBook,emptyBook,incrementEnrolledStudents } from './store/slice/ScienceSlice';

function App() {
   let books=useSelector(state=>state.social.books)
   let scienceBooks=useSelector(state=>state.science.books);
   let studentsCount=useSelector(state=>state.science.enrolledStudentsCount);
   const dispatch=useDispatch();
  function scienceStats()
  {
    console.log(scienceBooks)
    console.log(studentsCount)
  }
   function addBookToTheScienceSlice(){
    console.log("add book Function");
    dispatch(addBook("Botany"));
    }

    function emptyScienceBooks(){
      dispatch(emptyBook());
    }
    function studentEnrollment(){
      dispatch(incrementEnrolledStudents())
    }


   function addBookToTheSlice(){
    console.log("add book Function");
    dispatch(addbook("Civics"));
    }

    function printCurrentBooks()
    {
      console.log("current books: ",books)
    }
    function emptyAllBooks()
    {
      dispatch(emptyBooks());
     
    }

  return (
  
    <>
   <h1>Hello Redux</h1>
   <button onClick={addBookToTheSlice}>add Social book</button><br/><br/>
   <button onClick={printCurrentBooks}>GET Social books</button><br/><br/>
   <button onClick={emptyAllBooks}>Empty all Social  books</button><br/><br/>

   <hr/>
   <button onClick={addBookToTheScienceSlice}>add Science book</button><br/><br/>
   <button onClick={scienceStats}>GET Science books</button><br/><br/>
   <button onClick={emptyScienceBooks}>Empty all  Science books</button><br/><br/>
   <button onClick={studentEnrollment}>  Student Enroll </button><br/><br/>
   
   </>

  
  )
}

export default App
