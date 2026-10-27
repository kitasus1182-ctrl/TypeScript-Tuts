//profile card
const userName : string = "Meet Suthar";
const userAge : number = 24;
const isOnline : boolean = true;
const userScore : number | null = 75; 

function getUserinfo() : void{
    console.log(`user: ${userName}`);
    console.log(`age: ${userAge}`);
    console.log(`online: ${isOnline}`);
    console.log(`score: ${userScore}`);
}

//greeeting function with optional parameter
function greetingFunc(name?: string) : string {
    return `good morning ${name ?? "guest"}`;
}