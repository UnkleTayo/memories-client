import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import useStyles from './styles';
const Posts = () => {
  // post is being returned from the reducers index file
  // createSelector is used to acces data from the state
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
