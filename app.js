// method 1: exporing an object
var my_module = require("./my_module");
my_module.greet();
my_module.add(10, 23);

// method 2 : exporting a funtion that returns an object (object constructor)
// var my_module = require("./my_module")();
// console.log(my_module);
// my_module.greet();
// my_module.add(5, 6);

// method 3 express like
// var my_module = require("./my_module");
// var module = my_module();
// console.log(my_module);
// module.greet();
// module.add(5, 6);
