"use strict";
//objects-interfaces, arrays, tuples and enums
//object type
const person = {
    firstName: "Meet",
    lastName: "Suthar",
    age: 24
};
;
const myCar = {
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
const arr1 = ["meet", "daksh", "naresh", "suresh"];
const arr2 = [12, 34, 55, 22];
arr1.push("hello");
const arr3 = [
    { firstName: "Meet", lastName: "Suthar" },
    { firstName: "Anuj", lastName: "Barot" }
];
const myTuple = ["Meet", "Suthar", 123];
