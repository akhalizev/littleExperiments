//Function as a callback
//First class function

function add(first, second, callback) {
  console.log(first + second);
  //if we have callback than use it
  if (callback) {
    callback();
  }
}

add(5, 4, function () {
  console.log("done");
});

add(17, 2, function () {
  console.log("done again!");
});

add(33, 5);

console.log("====================================");
console.log();
console.log("====================================");

var a = 1;

function foo() {
  //var a = 1; //if declared than a = 2 but only in a function scope

  a = 2; // looking for a scope which is window scope now
}

foo();
console.log(a);

console.log("====================================");
console.log();
console.log("====================================");

var obj = {
  foo: function () {
    console.log(this === window);
  },
};

obj.foo();

obj.foo.call(window);
obj.foo.apply(window);

var myBoundFoo = obj.foo.bind(window);

myBoundFoo();
