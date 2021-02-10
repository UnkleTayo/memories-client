import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';

import useStyles from './styles';
const Posts = ({ setCurrentId }) => {
  // post is being returned from the reducers index file
  // createSelector is used to acces data from the state
  const posts = useSelector((state) => state.posts);
  console.log(posts, setCurrentId);
  const classes = useStyles();
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      className={classes.mainContainer}
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} container spacing={2}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
