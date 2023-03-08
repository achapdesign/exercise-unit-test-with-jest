const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(10)

    const expected = 10 * 1.2; 
    
     expect(fromEuroToDollar(10)).toBe(12);
})

test("One dollar should be 153.48 Yen", function(){

    const { fromDollarToYen } = require('./app.js')

    const Yen = fromDollarToYen(12)

    const expected = 12 * 127.9 * 1.2; 
    
     expect(fromDollarToYen(12)).toBe(1841.7600000000002); 
})

test("One Yen should be .0075048 Pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(1)

    const expected = 1 * 0.006254 * 1.2; 
    
     expect(fromYenToPound(1)).toBe(0.0075048); 
})
