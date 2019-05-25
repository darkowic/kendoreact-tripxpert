const axios = require('axios');


const URL_PREFIX = 'https://demos.telerik.com/aspnet-mvc/tripxpert';


module.exports = async (req, res, next) => {

  console.log('test', req.url);

  const apiResp = await axios.get(`${URL_PREFIX}${req.url}`);

  res.status(200).json(apiResp.data);
};
