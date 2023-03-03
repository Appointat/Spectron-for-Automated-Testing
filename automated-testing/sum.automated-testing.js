// import sum from '../front-end/sum.js'
const sum = require('../front-end/sum')

test(
    'adds 1 + 2 to equal 3', () => {
        console.log(`result = ${sum(1, 2)}\n`);
        expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

