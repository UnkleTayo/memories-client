import axios from 'axios';

// const API = axios.create({ baseURL: 'https://cors-anywhere.herokuapp.com/https://ukt-memories.herokuapp.com' });
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// const url = 'https://ukt-memories.herokuapp.com/posts';

export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, {value})
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);