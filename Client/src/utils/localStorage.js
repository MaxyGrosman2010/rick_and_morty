//Set
const setToken = (token) => localStorage.setItem('token', token);
const setUser = (user) => localStorage.setItem('user', user);
//Get
const getToken = () => localStorage.getItem('token');
const getUser = () => localStorage.getItem('user');
//Delete
const deleteUser = () => localStorage.removeItem('user');
const deleteToken = () => localStorage.removeItem('token');
const deleteAll = () => localStorage.clear();

module.exports = {setToken, getToken, deleteToken, setUser, getUser, deleteUser,
     deleteAll};