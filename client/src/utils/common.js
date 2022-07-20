const axios = require("axios");

const fetchAPI = async ({ url, method, data }) => {
  const token = localStorage.getItem("taskAuthToken");
  const parsedUrl = `http://localhost:4000${url}`;
  const config = {
    method: method || "GET",
    url: parsedUrl,
    ...(data && { ...data }),
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios(config);
  return response.data;
};

module.exports = {
  fetchAPI,
};
