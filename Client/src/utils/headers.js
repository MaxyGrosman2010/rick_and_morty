const {getToken} = require('./localStorage');

module.exports = () => {
    const token = getToken();
    return {headers: {Authorization: ` Bearer ${token}`}};
};