const rx = require("rxjs");

const a = rx.timer(1000, 500);

a.subscribe({
  next: function (v) {
    console.log(v);
  },
  complete: function () {
    console.log("complete");
  },
});
