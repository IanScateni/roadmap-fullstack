const axios = require('axios');

const httpClientPlugin = {

  get: async(url) => {
    // const response = await fetch(url);
    // return await response.json();
    // Make a request for a user with a given ID
    const { data } = await axios.get( url );
    return data;

  },


};

module.exports = {
  http: httpClientPlugin,
};