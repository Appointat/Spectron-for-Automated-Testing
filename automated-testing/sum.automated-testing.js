// import sum from '../front-end/sum.js'
const sum = require('../front-end/sum.js')

test(
    'adds 1 + 2 to equal 3',
    () => {
        expect(sum(1, 2)).toBe(3);
    });

