import axios from "axios";

export default axios.create({
  baseURL: "https://capstone-backend-coht.onrender.com/FilesUpload",
  headers: {
    "Content-type": "application/json",
  },
});
