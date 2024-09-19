const functions = require('./functions')
const axios = require('axios');
jest.mock('axios');
// 
test('should fetch users', async () => {

  
    const user = {name: 'Bob'};
    const resp = {data: user};
    axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return await functions.fetchUser().then(data => expect(data).toEqual(user));
  
});