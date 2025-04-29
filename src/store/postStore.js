import { create } from 'zustand';
import axios from 'axios';

const usePostStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      set({ posts: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  addPost: async (post) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
      set((state) => ({ 
        posts: [...state.posts, response.data],
        loading: false 
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  updatePost: async (id, updatedPost) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost);
      
      if (response.status === 200) {
        set((state) => ({
          posts: state.posts.map(post => 
            post.id === id ? { ...post, ...updatedPost } : post
          ),
          loading: false
        }));
      } else {
        throw new Error('게시글 수정에 실패했습니다.');
      }
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },
  
  deletePost: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      set((state) => ({
        posts: state.posts.filter(post => post.id !== id),
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default usePostStore; 