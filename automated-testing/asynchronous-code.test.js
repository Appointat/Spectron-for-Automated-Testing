// Testing Asynchronous Code
const fetchData = require('../front-end/asynchronous-code');

// Promise
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

// async and await
test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    // The expect.assertions() function is used to set
    // an expected number of assertions in a test function
    // to ensure that all assertions in the test function are executed.
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});



// Combination of async and await
//test('the fetch fails with an error', () => {

//})