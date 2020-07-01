const rx = require("rxjs");

const a = rx.Observable.create(function (observer) {
  observer.next("孙");
  observer.next("杨");
  observer.next("杰");
  observer.complete();
  setTimeout(() => {
    console.log(123);
    observer.next("top");
  }, 1000);
});

// a.subscribe(function (a, b, c) {
//   console.log(a, b, c);
// });

a.subscribe({
  next: function (v) {
    console.log(v);
  },
  complete: function (v) {
    console.log("complete");
  },
});
