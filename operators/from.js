const rx = require("rxjs");

const s = new Set();

s.add("a");
s.add("b");
s.add("c");

const ob = rx.from([1, 2, 3, s, ...s]);

ob.subscribe({
  next: function (v) {
    console.log(v);
  },
});
