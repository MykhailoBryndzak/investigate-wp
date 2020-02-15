async function start() {
  return await Promise.resolve("async is working");
}

start().then(console.log);

const unUsed = 42;

class Util {
  static id = Date.now();

  static checkChain = {
    test: {
      test1: {
        test2: {
          finalTest: "FINAL"
        }
      }
    }
  }
}

console.log("Util id: ", Util.id);
console.log("Final chain: ", Util.checkChain.test.test1?.test22?.finalTest);

import ("lodash").then(_ => {
  console.log("lodash---", _.random(0, 42, true))
});
