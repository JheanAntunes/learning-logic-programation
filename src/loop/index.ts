// for loop, while-loop, do-while loop, for-in loop, for-of loop, for-await-of loop
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// for-in loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// for-of loop
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}

// for-await-of loop
const asyncArr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
async function asyncFn() {
  for await (const value of asyncArr) {
    console.log(value);
  }
}
