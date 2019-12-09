const add = (a,b) => a + b;
const generateGreeting = (name='Anonymous') => `Hello ${name}!`;

test('should add to numbers', () => {
  const result = add (3,4);
  expect(result).toBe(7);
  // if(result !== 7){
  //   throw new Error(`You added 4 and 3 result was ${result}. Expect 7`);
  // }
});

test('Should generate greeting from name', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe(`Hello Mike!`);
});

test('Should generate greeting from noName', () => {
  const result = generateGreeting(); 
  expect(result).toBe(`Hello Anonymous!`);
});

