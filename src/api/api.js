import axios from "axios";

const BASE_URL = "http://15.165.54.186:8081";

const instance = axios.create({
  baseURL: "http://15.165.54.186:8081",
});

export const request = async (url, method, data) => {
  return await instance
    .request({
      url,
      method,
      data,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

//request("/login", "post", { id: 12334, pw: 123 });
