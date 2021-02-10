import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('profile').token
    )}`;
  }
  console.log(req);
  return req;
});

// const url = 'https://ukt-memories.herokuapp.com/posts';
//

// Fetch post from db
export const fetchPosts = () => API.get('/posts');
// Create a post
export const createPost = (newPost) => API.post('/posts', newPost);
//Update single post
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
// Delete a post
export const deletePost = (id) => API.delete(`/posts/${id}`);
// Like a post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// Sign in
export const signIn = (formData) => API.post('/user/signin', formData);
// Sign up
export const signUp = (formData) => API.post('/user/signup', formData);
