const rx = require("rxjs");

const a = rx.Observable.create((observer) => {
  observer.next("hello");
});

a.subscribe({
  next: function (v) {
    console.log(v);
  },
});
