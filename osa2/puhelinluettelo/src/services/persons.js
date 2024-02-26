import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = () => {
  return axios.get(baseUrl)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

const create = newObject => {
  return axios.post(baseUrl, newObject)
    .catch(error => {
      console.error('Error creating data:', error);
      throw error; 
    });
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
    .catch(error => {
      console.error('Error updating data:', error);
      throw error; 
    });
};

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
    .catch(error => {
      console.error('Error deleting data:', error);
      throw error; 
    });
};

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  remove: remove, 
};
