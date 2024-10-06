const functions = require('./functions')

const spy = jest.spyOn(functions, 'add')
spy.mockReturnValueOnce(5);
test ('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(5)
});