import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/header'
import './App.css'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import CreatePost from './component/CreatePost'
import PostList from './component/PostList'
import PostListProvider from './store/post-list-store'

function App() {
  const [selectedTab,setSelectTab] = useState("")

  return (
  <PostListProvider>
    
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab}  setSelectedTab={setSelectTab}></Sidebar>
      <div className='content'><Header></Header>
      {selectedTab==="Home" ?( <PostList></PostList>):(<CreatePost></CreatePost>)}
      
     
   <Footer></Footer>
   </div>
   
    </div>
    </PostListProvider>
 
  )
}

export default App
