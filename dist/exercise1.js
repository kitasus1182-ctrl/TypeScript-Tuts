"use strict";
//profile card
const userName = "Meet Suthar";
const userAge = 24;
const isOnline = true;
const userScore = 75;
function getUserinfo() {
    console.log(`user: ${userName}`);
    console.log(`age: ${userAge}`);
    console.log(`online: ${isOnline}`);
    console.log(`score: ${userScore}`);
}
//greeeting function with optional parameter
function greetingFunc(name) {
    return `good morning ${name !== null && name !== void 0 ? name : "guest"}`;
}
