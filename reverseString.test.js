const reverseString = require('./reverseString');

test('reverse function exists', () => {
    expect(reverseString).toBeDefined();
}); 

test('string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})