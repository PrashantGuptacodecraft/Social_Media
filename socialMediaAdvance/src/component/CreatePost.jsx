
import { Form, redirect } from "react-router-dom";


const CreatePost=()=>{

  // const {addPost}=useContext(PostList)
 

  const handleSubmit=(event)=>{
   



// addPost(post)
  }

    return <Form method="POST" className="create-post" >
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">
    User-ID
    </label>
    <input
      type="text"
      name="userId"
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
    name="title"
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
    name="body"
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
    name="reactions"
      type="text"
      className="form-control"
      id="reactions"
      placeholder="How many People reached to this post"
    />
    
  </div>
  
<div className="mb-3">
    <label htmlFor="tags" className="form-label">
    Enter Your HasTag
    </label>
    <input
    name="tags"
      type="text"
      className="form-control"
      id="tags"
      placeholder="Please enter tags using space"
    />
    
  </div>
  

  <button type="submit" className="btn btn-primary">
    Post
  </button>
</Form>

};

export async function CreatePostAction(data){

  const formData= await data.request.formData()
  const postData=Object.fromEntries(formData)
  // const {title,body,reactions,userId,tags}=postData
  postData.tags=postData.tags.split(" ")
  console.log(postData)
  
    fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData),
})
.then(res => res.json())
.then(post=>{addPost(post)
console.log(post)
});
return redirect('/')
}

export default CreatePost