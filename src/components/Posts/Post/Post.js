import React, { useDispatch } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import { deletePost } from '../../../actions/posts';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        title={post.title}
        image={post.selectedFile}
        className={classes.media}
      />

      <div className={classes.overlay}>
        <Typography variant='h6' color='initial'>
          {post.creator}
        </Typography>
        <Typography variant='body2' color='initial'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography
        className={post.title}
        variant='h5'
        gutterBottom={post.title}
      ></Typography>
      <CardContent>
        <Typography variant='h5' gutterBottom={post.message}></Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' /> like {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteIcon fontSize='small' /> Delete
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <ThumbUpAltIcon fontSize='small' />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
