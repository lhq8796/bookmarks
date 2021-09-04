import axios from "axios";

const instance = axios.create({
  baseURL: "/bookmarks",
});

export default instance;
