import axios from "axios";

axios.defaults.baseURL = "https://647991e0a455e257fa6357f0.mockapi.io";

export const getTweets = (page = 1) => {
  return axios.get("/users", { params: { limit: 3, page } });
};

export const followTweet = (id, tweet) => {
  return axios.put(`/users/${id}`, { ...tweet });
};
