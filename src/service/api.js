import axios from "axios";

axios.defaults.baseURL = "https://647991e0a455e257fa6357f0.mockapi.io";

axios.defaults.params = {
  limit: 3,
};

export const getTweets = (page = 1) => {
  return axios.get("/users", { params: { page } }).then((res) => res.data);
};

export const followTweet = (id, isFollowed) => {
  return axios
    .patch(`/users/${id}`, { params: { isFollowed } })
    .then((res) => res.data);
};
