import React from 'react'
import {Navbar,Header,Footer, Blogs} from "../componets" 
import Blogcontentpage from './Blogcontentpage'
const Homepage = () => {
  return (
    <div>

<Navbar/>
   <Header/>
   <Blogs/>
   {/*<Blogcontent/>*/}
   
   <Footer/>
 
    </div>
  )
}

export default Homepage
