const axios = require('axios');

const functions = {
    add: (a, b) => a + b ,
    isNull: ()=> null,
    createUser: () => {
        const user = {
            firstName: 'Kira',
            lastName: 'Green'
        };
        return user},
        fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
}

module.exports = functions;