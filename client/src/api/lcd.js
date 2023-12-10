import axios from "axios";

export const getLcd = async () => {
  return await axios.get("/api/lcd");
};

export const create = async (lcd) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/lcd", lcd);
};

export const geteditLcd = async (id) => {
  return await axios.get(`/api/lcd/${id}`);
};
export const editLcd = async (id, lcd) => {
  return await axios.put(`/api/lcd/${id}`, lcd);
};

export const deleteLcd = async (id) => {
  return await axios.delete(`/api/lcd/${id}`);
};

