import api from './apiConfig'

//Create comment
export const createComment = async (input) => {
  try {
    const res = await api.post("/comment", input)
    return res.data
  } catch (e) {
    throw e
  }
};

//Getting comment
export const getComment = async (id) => {
  try {
    const res = await api.get(`/comment/${id}`);
    return res.data
  } catch (e) {
    throw e
  }
};

//Deleting comment
export const deleteComment = async (id) => {
  try {
    const res = await api.delete(`/comment/${id}`)
    return res
  } catch (e) {
    throw e
  }
};

//Updating comment
export const updateComment = async (id) => {
  try {
    const res = await api.put(`/comment/${id}`)
    return res.data
  } catch (e) {
    throw e
  }
};