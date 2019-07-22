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

module.exports = appleFall;
