import{Homepage} from "./Pages"
import { Routes,Route } from "react-router-dom"
import { About,Register, Done,Sectionblog, Blogcontent, Courses ,} from "./componets"
import Login from "./componets/Login"

import Cousrecontent from "./componets/Cousrecontent"

export default function App() {
 
  return (
 <div>
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/Blog"  element={<Sectionblog/> }/>
    <Route path="/About" element={<About/>}   />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Blogcontent/:id" element={<Blogcontent />} />
    <Route path="/Cousrecontent/:id" element={<Cousrecontent/>}/>
    <Route path="/Courses"       element={<Courses/>}/>
    <Route path="/Done"       element={<Done/>}/>

  </Routes>
 </div> 
  )
}