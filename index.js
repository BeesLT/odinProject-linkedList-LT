const { LinkedList } = require('./linked_list_practice');
const list = new LinkedList();

list.append(49);
list.append(21);
list.append(17);

console.log("Size: " + list.size());

list.prepend(777);
console.log("Head: " + list.head());
console.log("Tail: " + list.tail());

console.log("Index 2: " + list.at(2));

console.log("String before pop: " + list.toString());
console.log("Contains 777: " + list.contains(777));
list.pop();
console.log("String after pop: " + list.toString());
console.log("Contains 777: " + list.contains(777));

console.log("Find index of 17: " + list.findIndex(17));

