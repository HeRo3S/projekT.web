import axios from "axios";

const instance = axios.create({
  base_url: "http://localhost:3001",
  headers: {
    //token authorization
  },
});

export default instance;
