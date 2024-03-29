console.log("Script started");

const interval = setInterval(() => {
  console.log("setInterval");
}, 0);

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 3")
  }).then(() => {
    console.log("promise 4");
  }).then(() => {
    setTimeout(() => {
      console.log("setTimeout 2");
      Promise.resolve().then(() => {
        console.log("promise 5");
      }).then(() => {
        console.log("promise 6");
      }).then(() => {
        clearInterval(interval)
      })
    }, 0)
  })
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
}).then(() => {
  console.log("promise 2");
});


/*
Phases of NODE.JS event loop:
1) Promises:
2) Timers:
*/

//Script started
// promise 1
// promise 2
// setInterval
// setTimeout 1
// promise 3
// promise 4
// setInterval
// setTimeout2
// promise 5
// promise 6