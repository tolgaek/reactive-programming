// Reactive Programming
var x = 5;
var y = x + 1;

Assert(y, 6);

// Some action that changes x to 15
x = 15;

var x = 15;

Assert(y, 16); // When x changes, the y value was automatically updated to reflect its value
