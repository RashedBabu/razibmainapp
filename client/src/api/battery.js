import axios from "axios";

export const getBattery = async () => {
  return await axios.get("/api/battery");
};
export const create = async (bettery) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  return await axios.post("/api/battery", bettery);
};

export const geteditBattery = async (id) => {
  return await axios.get(`/api/battery/${id}`);
};
export const editBattery = async (id, battery) => {
  return await axios.put(`/api/battery/${id}`, battery);
};


export const deleteBattery = async (id) => {
  return await axios.delete(`/api/battery/${id}`);
};

