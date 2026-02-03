import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/header'
import './App.css'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    
    <div className='app-container'>
      <Sidebar></Sidebar>
      <div className='content'><Header></Header>
   <Footer></Footer>
   </div>
   
    </div>
 
  )
}

export default App
