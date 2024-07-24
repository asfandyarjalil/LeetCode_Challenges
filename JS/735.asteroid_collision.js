// var asteroidCollision = function (asteroids) {
//   let stack = [];
//   for (let i = 0; i < asteroids.length; i++) {
//     if (asteroids[i] > 0 && asteroids[i + 1] > 0) {
//       stack.push(asteroids[i]);
//     }
//     if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
//       let num2 = Math.abs(asteroids[i + 1]);
//       if (asteroids[i] > num2 && asteroids[i] !== num2) {
//         stack.push(asteroids[i]);
//       } else if (asteroids[i] < num2 && asteroids[i] !== num2) {
//         stack.push(asteroids[i + 1]);
//       }
//     }
//   }

//   return stack;
// };
// var asteroidCollision = function (asteroids) {
//   let positive = [];
//   for (let i = 0; i < asteroids.length; i++) {
//     if (asteroids[i] > 0) {
//       positive.push(i);
//     } else {
//       const negVal = asteroids[i];

//     }
//   }
// };
// const asteroidCollision = function (asteroids) {
//   const positive = [];
//   for (let i = 0; i < asteroids.length; i++) {
//     if (asteroids[i] > 0) {
//       positive.push(i);
//     } else {
//       const negVal = asteroids[i];
//       while (
//         positive.length > 0 &&
//         asteroids[positive[positive.length - 1]] + negVal < 0
//       ) {
//         asteroids[positive[positive.length - 1]] = undefined;
//         positive.pop();
//       }
//     }
//   }
//   console.log(positive);
// };
// var asteroidCollision = function (asteroids) {
//   let stack = [];
//   let left = [],
//     right = [];
//   for (let i = 0; i < asteroids.length; i++) {
//     if (asteroids[i] > 0) {
//       stack.push(asteroids[i]);
//     }
//     if (asteroids[i] < 0) {
//       right.push(asteroids[i]);
//     }
//   }
//   for (let i = 0; i < Math.max(stack.length, right.length); i++) {
//     if (stack[stack.length - (i + 1)] < Math.abs(right[i]) || 0) {
//       stack.pop();
//       stack.push()
//     } else {
//       stack.push(right[i]);
//     }
//   }

//   return stack;
// };
const asteroidCollision = function (asteroids) {
  const positive = [];
  const res = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0) {
      positive.push(i);
    } else {
      const negVal = asteroids[i];

      while (
        positive.length > 0 &&
        asteroids[positive[positive.length - 1]] + negVal < 0
      ) {
        asteroids[positive[positive.length - 1]] = undefined;
        positive.pop();
      }

      if (positive.length > 0) {
        if (asteroids[positive[positive.length - 1]] + negVal > 0) {
          asteroids[i] = undefined;
        } else if (asteroids[positive[positive.length - 1]] + negVal === 0) {
          asteroids[i] = undefined;
          asteroids[positive[positive.length - 1]] = undefined;
          positive.pop();
        }
      }
    }
  }
  return asteroids.filter((el) => el !== undefined);
};
let asteroids = [10, 2, -5];
let res = asteroidCollision(asteroids);
console.log(res);
