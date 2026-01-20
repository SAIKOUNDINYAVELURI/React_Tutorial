import './App.css'
import HomePage from './Pages/Home'
import ContactPage from './Pages/Contact'
import AboutPage from './Pages/About'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import UserPage from './Pages/User'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'
function App() {
  return(
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={ <HomePage/>}/>
     <Route path='/about' element={  <AboutPage/>}/>
     <Route path='/contact' element={ <ContactPage/>}/>
     <Route path='/user/:name' element={<UserPage/>}/>
     <Route path='/Dashboard/:name' element={<Dashboard/>}>
     <Route path='Settings' element={<Settings/>}/>
     <Route path='Profile' element={<Profile/>}/>
     </Route>
     <Route path='*' element={<h1>404 Page Not Found</h1>}/>
    </Routes>
    </>
  )
  
}

export default App 
