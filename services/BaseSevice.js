const axios = require('axios');

class BaseService {
  constructor(baseUrl, apikey) {
    this.baseurl = baseUrl;
    this.apikey = apikey;
  }

  async get(url,params) {
    let myurl = this.baseurl + url;
    if(params){
        myurl += `?q=${JSON.stringify(params)}`
        //myurl.searchParams.append("q",JSON.stringify(params))
        //Object.keys(params).forEach(key => myurl.searchParams.append(key, encodeURIComponent(params[key])));
    }

    const options = {
        method: 'GET',
        url: myurl,
        headers: {
          'cache-control': 'no-cache',
          'x-apikey': this.apikey
        }
      };
    
      try {
        const response = await axios(options);
        console.log(response.data);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }

  }

  async post(url, params) {
    const options = {
        method: 'POST',
        url: this.baseurl + url,
        headers: {
          'cache-control': 'no-cache',
          'x-apikey': this.apikey,
          'content-type': 'application/json'
        },
        data: params
      };
    
      try {
        const response = await axios(options);
        console.log(response.data);
        return response.data
      } catch (error) {
        throw new Error(error);
      }
  }
}

module.exports = BaseService;
