import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  // const [fetching, setFatching] = useState(false); // Kept original spelling

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { post },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };

  // const addInitialPost = (posts) => { // Kept original spelling
  //   dispatchPostList({
  //     type: 'ADD_INITIAL_POST',
  //     payload: { posts },
  //   });
  // };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  // useEffect(() => {
  //   setFatching(true); // Kept original spelling
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts); // Kept original naming
  //       setFatching(false); // Kept original spelling
  //     })
  //     .catch((err) => {
  //       if (err.name === "AbortError") {
  //         console.log("Fetch aborted");
  //       } else {
  //         setFatching(false);
  //       }
  //     });

  //   return () => controller.abort();
  // }, []);

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
