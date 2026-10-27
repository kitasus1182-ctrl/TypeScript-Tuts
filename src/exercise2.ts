//object interface arrays tupels exercise
interface myProduct{
    id: number;
    name: string;
    price: number;
    description ?: string
}

let item : myProduct = {
    id: 123,
    name: "Boat Earphones",
    price: 2000
}

//library inventory
interface myBook{
    bookName: string;
    bookAuthor: string;
    bookPages: number
}

const bookArr : myBook[] = [
    {bookName: "a suitable boy", bookAuthor: "vikram seth", bookPages: 1234},
    {bookName: "Don Quixote", bookAuthor: "Miguel de Cervantes", bookPages: 385},
];

bookArr.push(
    {
        bookName: "Harry Potter and the Sorcerer's Stone",
        bookAuthor: "J.K. Rowling",
        bookPages: 309
    }
)

//user profile status
interface userProfile {
    userName: string;
    isActive: boolean;
    tags:  string[];
    lastLogin: [date: string, hour: number]
}

const myProfile : userProfile = {
    userName: "Meet Sythar",
    isActive: true,
    tags: ["mern dev", "shopify dev"],
    lastLogin: ["21-9-2026", 8]
}