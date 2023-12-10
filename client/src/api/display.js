import axios from "axios";

export const getDisplay = async () => {
  return await axios.get("/api/display");
};

export const create = async (display) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/display", display);
};

export const geteditUser = async (id) => {
  return await axios.get(`/api/display/${id}`);
};
export const editUser = async (id, display) => {
  return await axios.put(`/api/display/${id}`, display);
};

// export const geteditDisplay = async (id) => {
//   return await axios.get(`/api/display/${id}`);
// };

export const deleteDisplay = async (id) => {
  return await axios.delete(`/api/display/${id}`);
};
