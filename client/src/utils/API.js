import axios from "axios";

export default {
  // Gets all users (Can be used for matching process)
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Can function with age/height for more specific matches)
  getUser: function (id) {
    return axios.get("/api/users/id/" + id);
  },
  // Deletes the user with the given id (Deletes users from profile after they matched)
  deleteUser: function (id) {
    return axios.delete("/api/users/id/" + id);
  },
  saveInfo: function (info) {
    return axios.post("/api/users/username/:username/info", info)
  },
  // Saves a user to the database (Can be used to save match in profile)
  saveUser: function (postData) {
    return axios.post("/api/users", postData);
  },
  checkUser: function (uuid, username) {
    return axios.post(`/userCheck/${uuid}/${username}`);
  },
};
