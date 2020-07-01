const rx = require("rxjs");

const sb = new rx.Subject();

const ob1 = {
  next: function (v) {
    console.log("ob1", v);
  },
};

const ob2 = {
  next: function (v) {
    console.log("ob2", v);
  },
};

sb.subscribe(ob1);
sb.subscribe(ob2);
sb.subscribe(ob1);

sb.next(1);
sb.next(2);
