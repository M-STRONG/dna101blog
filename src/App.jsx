import{Blogcontentpage, Homepage} from "./Pages"
import { Routes,Route } from "react-router-dom"
import { About, Blogs, Sectionblog } from "./componets"
import Login from "./componets/Login"

export default function App() {
  return (
 <div>
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/Blog"  element={<Sectionblog/>}/>
   
    <Route path="/About" element={<About/>}   />
    <Route path="/Login" element={<Login/>} />
   
  </Routes>
 
 </div> 
  )
}