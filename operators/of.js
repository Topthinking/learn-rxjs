const rx = require("rxjs");

const ob = rx.of("a", "b");

ob.subscribe({
  next: function (v) {
    console.log(v);
  },
});
