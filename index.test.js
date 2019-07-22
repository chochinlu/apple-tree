const appleFall = require('./index');

test('No Collision', () => {
  const apples = [{ x: 0, y: 0, z: 100, r: 10 }, { x: 0, y: 0, z: 200, r: 15 }];
  const index = 0;

  expect(appleFall(apples, index)).toBe('1');
});

test('Single Collision', () => {
  const apples = [
    { x: 0, y: 0, z: 0, r: 25 },
    { x: 200, y: 200, z: 0, r: 25 },
    { x: 200, y: -200, z: 0, r: 25 },
    { x: -200, y: 200, z: 0, r: 25 },
    { x: -200, y: -200, z: 0, r: 25 },
    { x: 5, y: 10, z: 500, r: 10 }
  ];
  const index = 5;

  expect(appleFall(apples, index)).toBe('4');
});

test('Cascade', () => {
  const apples = [
    { x: 0, y: 500, z: 100, r: 3 },
    { x: 0, y: 0, z: 0, r: 500 },
    { x: 500, y: 0, z: 1000, r: 100 },
    { x: 600, y: 0, z: 2000, r: 50 },
    { x: 650, y: 0, z: 3000, r: 50 },
    { x: 700, y: 0, z: 5000, r: 1 },
    { x: 800, y: 0, z: 4000, r: 5 },
    { x: 800, y: 0, z: 3000, r: 10 }
  ];
  const index = 5;

  expect(appleFall(apples, index)).toBe('3');
});
