import api from "./apiConfig";
import jwtDecode from "jwt-decode";

//User SignUp
export const signUp = async (credentials) => {
  try {
    const res = await api.post("/sign-up", credentials)
    localStorage.setItem("token", res.data.token);
    let user = jwtDecode(res.data.token);
    return user;
  } catch (e) {
    throw e
  };
};

//User SignIn
export const signIn = async (credentials) => {
  try {
    const res = await api.post("/sign-in", credentials)
    localStorage.setItem("token", res.data.token);
    let user = jwtDecode(res.data.token);
    return user;
  } catch (e) {
    throw e
  };
};

export const verify = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = await api.get("/verify")
    // console.log(res.data)
    return res.data
  }
  else {
    return false;
  };
};

//User SignOut
export const signOut = () => {
  try {
    localStorage.removeItem("token")
    return true;
  } catch (e) {
    throw e
  }
}