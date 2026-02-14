import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"
import Welcome from "./Welcome"
import LoadingSpinner from "./LoadingSpinner"
const PostList=()=>{
    const {postList,addInitialPost}=useContext(PostListData)
    const [fetching,setFatching]=useState(false)
  
useEffect(()=>{
    setFatching(true)
    const controller=new AbortController();
    const signal=controller.signal
fetch('https://dummyjson.com/posts',signal)
.then(res => res.json())
.then(data=>{
    addInitialPost(data.posts)
    setFatching(false)
});
return ()=>{
    controller.abort();
}
},[])

    


    const handleGetPostsClick=()=>{

    }

    return( <>
{fetching && <LoadingSpinner></LoadingSpinner> }
   { !fetching  && postList.length===0  && <Welcome  ></Welcome> }
    { !fetching  && postList.map((post)=>(
        <Post key={post.id}  post={post}/>
        
        )
    )
        }
        
    
    </>
    )

}
export default PostList