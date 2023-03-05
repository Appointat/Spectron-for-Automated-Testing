// import sum from '../front-end/sum'
const sum = require('../front-end/sum.js')

//// Section of Expect Matchers

test('adds 1 + 2 to equal 3', () => {
    console.log(`result = ${sum(1, 2)}\n`);
    expect(sum(1, 2)).toBe(3);
});

// Sexpect().toEuqal is used the check the equality of object.
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

// expect.not
test('adds 1 + 2 to equal 3', () => {
    console.log(`result = ${sum(1, 2)}\n`);
    expect(sum(1, 2)).not.toBe(4);
});

