import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const loaderPosts = useLoaderData();
  const { postList, addInitialPost } = useContext(PostListData);

  useEffect(() => {
    if (loaderPosts && loaderPosts.length && postList.length === 0) {
      addInitialPost(loaderPosts);
    }
  }, [loaderPosts]);

  return (
    <>
      {postList.length === 0 && <Welcome />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const PostLoder = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
};

export default PostList;
