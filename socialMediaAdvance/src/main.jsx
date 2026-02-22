import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from "react-router-dom"
// import './index.css'
import App from './routes/App.jsx'
import PostListProvider from './store/post-list-store'
import CreatePost, { CreatePostAction } from './component/CreatePost'
import PostList, { PostLoder } from './component/PostList'


const router=createBrowserRouter([{path:"/",element:<PostListProvider><App/></PostListProvider>,children:[{
  path:"/" ,element:<PostList/>,loader: PostLoder
},{
  path:"/create-post" ,element:<CreatePost/>,action:CreatePostAction }
]}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </StrictMode>,
)
