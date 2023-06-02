import axios from "axios";

axios.defaults.baseURL = "https://647991e0a455e257fa6357f0.mockapi.io";

export const getTweets = async (page = 1) => {
  try {
    const data = await axios.get("/users", { params: { limit: 3, page } });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const followTweet = async (id, tweet) => {
  try {
    const data = await axios.put(`/users/${id}`, { ...tweet });
    return data;
  } catch (error) {
    console.log(error);
  }
};
