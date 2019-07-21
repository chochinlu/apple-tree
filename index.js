function appleFall(apples, i) {
  const { x, y, z, r } = apples[i];

  let remainApplesNum = apples.length;

  let index = 0;

  while (index < apples.length) {
    if (index === i) {
      remainApplesNum = remainApplesNum - 1;
      index++;
      continue;
    }

    const { x, y, z, r } = apples[i];
    const target = apples[index];

    const safeZ = target.z - target.r > z + r;
    const safeX = target.x + target.r < x - r || target.x - target.r > x + r;
    const safeY = target.y + target.r < y - r || target.y - target.r > y + r;

    if (safeZ) {
      index++;
      continue;
    } else {
      if (!safeX) {
        remainApplesNum = remainApplesNum - 1;
      } else {
        if (!safeY) {
          remainApplesNum = remainApplesNum - 1;
        }
      }
      index++;
    }
  }

  return remainApplesNum.toString();
}

const result = appleFall(
  [{ x: 0, y: 0, z: 100, r: 10 }, { x: 0, y: 0, z: 200, r: 15 }],
  0
);
console.log(result);
