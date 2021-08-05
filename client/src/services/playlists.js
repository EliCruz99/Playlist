import api from "./apiConfig";


//Create Playlist
export const createPlaylist = async (input) => {
  try {
    const res = await api.post("/playlist", input)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
};

// Getting playlist
export const getPlaylist = async (id) => {
  try {
    const res = await api.get(`/playlist/${id}`);
    return res.data
  } catch (e) {
    throw e;
  }
};

// Deleting Plalist
export const deletePlaylist = async (id) => {
  try {
    const res = await api.delete(`/playlist/${id}`);
    return res
  } catch (e) {
    throw e;
  }
};

// Updating playlist
export const updatePlaylist = async (id) => {
  try {
    const res = await api.put(`/playlist/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
