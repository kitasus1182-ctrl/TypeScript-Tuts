"use strict";
//generics and utility in type script
function identity(data) {
    return data;
}
let val = identity("hello meet");
let val2 = identity(12);
//generics with constraints
function identityWithConstraints(data) {
    return data;
}
let val3 = identityWithConstraints("hello, my name is meet");
let val4 = identityWithConstraints(12);
//use generics with array
function GetFirstElement(arr) {
    return arr[0];
}
let val5 = GetFirstElement(["a", "b"]);
//generic function with pairing
function pair(key, val) {
    return [key, val];
}
//function to get length
function getLength(data) {
    return data.length;
}
