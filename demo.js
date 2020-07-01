const rx = require("rxjs");

const a = rx.Observable.create(function (observer) {
  observer.next("孙");
  observer.next("杨");
  observer.next("杰");
});

a.subscribe(function (v) {
  console.log(v);
});
