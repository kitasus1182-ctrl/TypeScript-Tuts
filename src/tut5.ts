//generics and utility in type script
function identity<T>(data: T){
    return data;
}

let val : string = identity("hello meet");

let val2 : number = identity(12);

//generics with constraints
function identityWithConstraints<T extends string | number>(data : T) : T{
    return data;
}

let val3 = identityWithConstraints<string>("hello, my name is meet");
let val4 = identityWithConstraints<number>(12);

//use generics with array
function GetFirstElement<T>(arr: T[]) : T{
    return arr[0];
}

let val5 = GetFirstElement<string>(["a","b"]);

//generic function with pairing
function pair<T,U>(key: T, val: U): [T,U]{
    return [key, val];
}

//function to get length
function getLength<T extends {length : number}>(data: T) : number{
    return data.length;
}