const axios = require('axios');

class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(resource, queryParams = {}) {
    try {
      const response = await axios.get(`${this.baseURL}${resource}`, { params: queryParams });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(resource, data) {
    try {
      const response = await axios.post(`${this.baseURL}${resource}`, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(resource, data) {
    try {
      const response = await axios.put(`${this.baseURL}${resource}`, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(resource) {
    try {
      const response = await axios.delete(`${this.baseURL}${resource}`);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
    }
    throw error;
  }
}

  module.exports = ApiService;