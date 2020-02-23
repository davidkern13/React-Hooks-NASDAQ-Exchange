import axios from 'axios';

/*
* callRequestApi Return axios data from request.
* @param {payload} - payload data of action
* @return {array} - requested data
*/
export const callRequestApi = async (payload) => {
    try {
       const response = await axios({
          method: payload.method,
          url: 'https://financialmodelingprep.com/api/v3/' + payload.url,
       });
       return response.data;
    } catch (error) {
      return error;
    }
}