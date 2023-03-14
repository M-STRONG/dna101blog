
import React from 'react'
import {Navbar,Header,Footer, Section} from "../componets" 
import VisitorCounter from '../componets/Service'

const Homepage = ({blogs}) => {
 
  return (
    <div>

<Navbar/>
   <Header/>
   <Section/>
  <VisitorCounter/>
  
   <Footer/>
 
    </div>
  )
}

export default Homepage
