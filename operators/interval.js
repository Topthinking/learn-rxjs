const rx = require("rxjs");

const a = rx.interval(1000);

a.subscribe({
  next: function (v) {
    console.log(v);
  },
});
