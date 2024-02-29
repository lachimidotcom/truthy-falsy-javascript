let myVar1 = "Hello, World!";
console.log("Truthy value 'non-empty string':", !!myVar1);

let myVar2 = 1;
console.log("Truthy value '1':", !!myVar2);

let myVar3 = -1;
console.log("Truthy value '-1':", !!myVar3);

let myVar4 = {};
console.log("Truthy value 'empty object':", !!myVar4);

let myVar5 = [];
console.log("Truthy value 'empty array':", !!myVar5);

let myVar6 = function () { };
console.log("Truthy value 'empty function':", !!myVar6);

let myVar7 = "0";
console.log("Truthy value '\"0\"':", !!myVar7);

let myVar8 = "false";
console.log("Truthy value '\"false\"':", !!myVar8);