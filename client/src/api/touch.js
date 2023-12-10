import axios from "axios";

export const getTouch = async () => {
  return await axios.get("/api/touch");
};

export const create = async (data) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/touch", data);
};

export const geteditTouch = async (id) => {
  return await axios.get(`/api/touch/${id}`);
};
export const editTouch = async (id, touch) => {
  return await axios.put(`/api/touch/${id}`, touch);
};

export const deleteTouch = async (id) => {
  return await axios.delete(`/api/Touch/${id}`);
};

