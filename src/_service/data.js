const axios = require("axios").default;
module.exports = async (location) => {
  const response = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location},in&units=metric&appid=${process.env.API_KEY}`
  );
  return response.data;
};
