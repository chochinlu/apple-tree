function appleFall(apples, i) {
  if (apples.length === 0 || apples.length === 1) {
    return '0';
  }

  // 將一開始掉下的蘋果與開頭蘋果對調, 左邊的蘋果就是會掉下的, 右邊陣列的蘋果就是沒有掉下的
  if (i !== 0) {
    const temp = apples[0];
    apples[0] = apples[i];
    apples[i] = temp;
  }

  let fallenTotal = 1;
  let checkedFallenIndex = 0;

  while (checkedFallenIndex < fallenTotal) {
    let compareIndex = fallenTotal;

    const fallenApple = apples[checkedFallenIndex];
    const { x, y, z, r } = fallenApple;

    while (compareIndex < apples.length) {
      const target = apples[compareIndex];

      const safeZ = target.z - target.r > z + r;
      const safeX = target.x + target.r < x - r || target.x - target.r > x + r;
      const safeY = target.y + target.r < y - r || target.y - target.r > y + r;

      if (!safeZ && (!safeX || !safeY)) {
        const temp = apples[fallenTotal];
        apples[fallenTotal] = apples[compareIndex];
        apples[compareIndex] = temp;

        fallenTotal = fallenTotal + 1;
      }

      compareIndex = compareIndex + 1;
    }

    checkedFallenIndex = checkedFallenIndex + 1;
  }

  // console.log({ apples, left, right });
  const result = apples.length - fallenTotal;
  return result.toString();
}

// function appleFall(apples, i) {
//   const { x, y, z, r } = apples[i];

//   let remainApplesNum = apples.length;

//   let index = 0;

//   while (index < apples.length) {
//     if (index === i) {
//       remainApplesNum = remainApplesNum - 1;
//       index++;
//       continue;
//     }

//     const { x, y, z, r } = apples[i];
//     const target = apples[index];

//     const safeZ = target.z - target.r > z + r;
//     const safeX = target.x + target.r < x - r || target.x - target.r > x + r;
//     const safeY = target.y + target.r < y - r || target.y - target.r > y + r;

//     if (safeZ) {
//       index++;
//       continue;
//     } else {
//       if (!safeX) {
//         remainApplesNum = remainApplesNum - 1;
//       } else {
//         if (!safeY) {
//           remainApplesNum = remainApplesNum - 1;
//         }
//       }
//       index++;
//     }
//   }

//   return remainApplesNum.toString();
// }

// const result = appleFall(
//   [{ x: 0, y: 0, z: 100, r: 10 }, { x: 0, y: 0, z: 200, r: 15 }],
//   0
// );

// const result = appleFall(
//   [
//     { x: 0, y: 0, z: 0, r: 25 },
//     { x: 200, y: 200, z: 0, r: 25 },
//     { x: 200, y: -200, z: 0, r: 25 },
//     { x: -200, y: 200, z: 0, r: 25 },
//     { x: -200, y: -200, z: 0, r: 25 },
//     { x: 5, y: 10, z: 500, r: 10 }
//   ],
//   5
// );

// console.log(result); // 4

const result = appleFall(
  [
    { x: 0, y: 500, z: 100, r: 3 },
    { x: 0, y: 0, z: 0, r: 500 },
    { x: 500, y: 0, z: 1000, r: 100 },
    { x: 600, y: 0, z: 2000, r: 50 },
    { x: 650, y: 0, z: 3000, r: 50 },
    { x: 700, y: 0, z: 5000, r: 1 },
    { x: 800, y: 0, z: 4000, r: 5 },
    { x: 800, y: 0, z: 3000, r: 10 }
  ],
  5
);

console.log(result); // 3
