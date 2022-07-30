const axios = require("axios");

const fetchAPI = async ({ url, method, body = {} }) => {
  const token = localStorage.getItem("taskAuthToken");
  const parsedUrl = `http://localhost:4000${url}`;
  const config = {
    method: method || "GET",
    url: parsedUrl,
    data: body,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(config);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("taskAuthToken");
  window.location.reload();
};

module.exports = {
  fetchAPI,
  logout,
};
