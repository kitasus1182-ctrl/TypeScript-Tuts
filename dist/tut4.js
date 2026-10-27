"use strict";
//Dealing with DOM in typescript
//type assertion and type casting
// function addOrConcat(a: number, b: number, c: "add"|"concat") : number | string{
//     if(c === "add"){
//         return a + b;
//     }
//     return String(a) + String(b);
// }
//DOM handling in typescript
const inpName = document.querySelector("#name");
const inpAge = document.querySelector("#age");
const form = document.querySelector("#myForm");
const output = document.querySelector(".output-cont");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputName = inpName.value;
    const inputAge = inpAge.value;
    output.innerHTML = `<p>name: ${inputName} age: ${inputAge}</p>`;
});
