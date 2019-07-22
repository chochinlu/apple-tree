// solution from https://www.xarg.org/puzzle/codingame/apple-tree/
function hitNew(a, b) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  var pr = b.r + a.r;

  // touch horizontally?
  if (dx * dx + dy * dy > pr * pr) {
    return false;
  }
  return b.z < a.z;
}

// mine -> cann't pass the cascade situations.
function hitOri(fallenApple, target) {
  const { x, y, z, r } = fallenApple;

  const safeZ = target.z - target.r > z + r;
  const safeX = target.x + target.r < x - r || target.x - target.r > x + r;
  const safeY = target.y + target.r < y - r || target.y - target.r > y + r;

  return !safeZ && (!safeX || !safeY);
}

const hit = (fallenApple, target) => hitNew(fallenApple, target);

function appleFall(apples, i) {
  if (apples.length === 0 || apples.length === 1) {
    return '0';
  }

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

    while (compareIndex < apples.length) {
      const target = apples[compareIndex];

      if (hit(fallenApple, target)) {
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
