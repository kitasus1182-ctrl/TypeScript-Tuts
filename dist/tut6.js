"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//data fetching in typescript
const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#searchBtn");
const imgEl = document.querySelector("#img");
const itemId = document.querySelector(".product-id");
const itemCategory = document.querySelector(".product-category");
const itemTitle = document.querySelector(".product-title");
const itemPrice = document.querySelector(".product-price");
const itemDescription = document.querySelector(".product-description");
function myApi(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fakestoreapi.com/products/${id}`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`http error ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
function myProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const inpval = Number(searchBar.value);
            if (inpval <= 0 && inpval >= 20) {
                throw new Error("please enter valid number");
            }
            const product = yield myApi(inpval);
            imgEl.src = product.image;
            itemId.textContent = String(product.id);
            itemCategory.textContent = product.category;
            itemTitle.textContent = product.title;
            itemPrice.textContent = String(product.price);
            itemDescription.textContent = product.description;
        }
        catch (error) {
            console.error("failed to fetch", error);
        }
    });
}
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    myProduct();
});
