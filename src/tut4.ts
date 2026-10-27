//Dealing with DOM in typescript
//type assertion and type casting

// function addOrConcat(a: number, b: number, c: "add"|"concat") : number | string{
//     if(c === "add"){
//         return a + b;
//     }
//     return String(a) + String(b);
// }

//DOM handling in typescript
const inpName = document.querySelector("#name")! as HTMLInputElement;
const inpAge = document.querySelector("#age")! as HTMLInputElement;
const form =  document.querySelector("#myForm")! as HTMLFormElement;
const output = document.querySelector(".output-cont")! as HTMLElement

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputName = inpName.value;
    const inputAge = inpAge.value;
    output.innerHTML = `<p>name: ${inputName} age: ${inputAge}</p>`
});