//objects-interfaces, arrays, tuples and enums
//object type

type Person = {
    firstName : string,
    lastName : string,
    age : number
};

const person : Person = {
    firstName: "Meet",
    lastName: "Suthar",
    age: 24
};

//interface in typescript
interface Car {
    carType: string;
    carModel: string;
    carYear?: number
    carFeature: carFeture
};

interface carFeture {
    carColor: string;
    carSpeed: number | string;
    carMilage: number | string;
    carEngine: string
}

const myCar : Car = {
    carType: "Suzuki",
    carModel: "Swift Desire",
    carFeature: {
        carColor: "white",
        carSpeed: "240 km/h",
        carMilage: "30 km/litre",
        carEngine: "1.2L Z12"
    }
};

//arrays in typescript
 const arr1 : string[] = ["meet","daksh","naresh","suresh"];
 const arr2 : number[] = [12,34,55,22];

 arr1.push("hello");

 interface student {
    firstName: string;
    lastName: string
 }

 const arr3 : student[] = [
    {firstName: "Meet", lastName: "Suthar"},
    {firstName: "Anuj", lastName: "Barot"}
 ]

 //tupels in typescript
 type point = [string,string,number];
 const myTuple : point = ["Meet", "Suthar", 123];