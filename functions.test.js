const functions = require('./functions')

test ('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
});

test ('adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
});

test ('should be null', () => {
    expect(functions.isNull()).toBeNull()
});

test('user function returns Kira Green object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Kira', lastName: 'Green'})
});

test('admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin')
});

test('fetch user fetches the user with name Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
});
// same but with async await
test('fetch user fetches the user with name Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
});


