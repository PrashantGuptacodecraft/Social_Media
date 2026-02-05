import { createContext, useReducer } from "react";





export const PostList=createContext(
      {postList:[],
    addPost:()=>{},
    deletePost:()=>{},}
    )



    const postListReducer=(currPostList,action)=>{
        return currPostList;
    }

const PostListProvider=({children})=>{

    const [postList,dispatchProvider]=useReducer(postListReducer,DEFAULT_POST_LIST);
    const addPost=()=>{

    }
    const deletePost=()=>{

    }
return <PostList.Provider value={
    {postList,
    addPost,
    deletePost}
} >
    {children}
</PostList.Provider>
}

const DEFAULT_POST_LIST=[{
    id:'1',
    title:'Going to Mumbai',
    body:'I have enjoy the ride',
    reaction: 2,
    userId:'use-9',
    tags:["vaction","mumbai","Enjoying"]
},{
    id:'2',
    title:'Pass ho gya',
    body:'hum to pass ho gaye bhaiya',
    reaction: 10,
    userId:'use-12',
    tags:["Gragutaion","full","Enjoying"]
}
]
export default PostListProvider