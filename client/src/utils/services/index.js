import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004";
export const getNotes = () =>
  axios.get(`/notes`).catch(error => {
    throw error;
  });
export const getCategories = () =>
  axios.get(`/categories`).catch(error => {
    throw error;
  });
export const deleteNote = params =>
  axios.delete(`/notes/${params.id}`).catch(error => {
    throw error;
  });
export const updateNote = params =>
  axios.put(`/notes/${params.note.id}`, params.note).catch(error => {
    throw error;
  });
export const addNote = params =>
  axios.post(`/notes`, params).catch(error => {
    throw error;
  });
export const addCategory = params =>
  axios.post(`/categories`, params).catch(error => {
    throw error;
  });
