import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
const {deletePost}=useContext(PostList);




  return (
    <div className="card post-card position-relative" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        {/* Delete button */}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)} >
          <MdDelete style={{ cursor: "pointer" }} />
        </span>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hashtag me-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
 MY reaction
</div>
      </div>
    </div>
  );
};

export default Post;
