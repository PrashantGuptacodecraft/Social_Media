import { useContext, useRef } from "react";
// import PostList from "./PostList";
import { PostList } from "../store/post-list-store";

const CreatePost=()=>{

  const {addPost}=useContext(PostList)

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionElement.current.value
    const tags=tagsElement.current.value.split(" ")

    userIdElement.current.value='';
    postTitleElement.current.value='';
    postBodyElement.current.value='';
    reactionElement.current.value=''
    tagsElement.current.value=''

addPost(userId,postTitle,postBody,reactions,tags)
  }

    return <form className="create-post"onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">
    User-ID
    </label>
    <input
      type="text"
      ref={userIdElement}
      className="form-control"
      id="userId"
      placeholder="Ur userId"
    />
    
  </div>


  
  <div className="mb-3">
    <label htmlFor="title" className="form-label">
    Post Title
    </label>
    <input
    ref={postTitleElement}
      type="text"
      className="form-control"
      id="title"
      placeholder="How are you feeling Today"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">
    Post Content
    </label>
    <textarea rows='4'
    ref={postBodyElement}
      type="text"
      className="form-control"
      id="body"
      placeholder="Tell us more about it"
    />
    
  </div>


<div className="mb-3">
    <label htmlFor="title" className="form-label">
   No of Reaction
    </label>
    <input
    ref={reactionElement}
      type="text"
      className="form-control"
      id="title"
      placeholder="How many People reached to this post"
    />
    
  </div>
  
<div className="mb-3">
    <label htmlFor="tags" className="form-label">
    Enter Your HasTag
    </label>
    <input
    ref={tagsElement}
      type="text"
      className="form-control"
      id="tags"
      placeholder="Please enter tags using space"
    />
    
  </div>
  

  <button type="submit" className="btn btn-primary">
    Post
  </button>
</form>

};

export default CreatePost