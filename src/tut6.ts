//data fetching in typescript
const searchBar = document.querySelector("#searchBar")! as HTMLInputElement;
const searchButton = document.querySelector("#searchBtn")! as HTMLButtonElement;
const imgEl = document.querySelector("#img")! as HTMLImageElement;
const itemId = document.querySelector(".product-id")! as HTMLSpanElement;
const itemCategory = document.querySelector(
  ".product-category",
)! as HTMLSpanElement;
const itemTitle = document.querySelector(
  ".product-title",
)! as HTMLHeadingElement;
const itemPrice = document.querySelector(".product-price")! as HTMLDivElement;
const itemDescription = document.querySelector(
  ".product-description",
)! as HTMLParagraphElement;

interface getData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function myApi(id: number): Promise<getData> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`http error ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw error;
  }
}

async function myProduct() {
  try {
    const inpval = Number(searchBar.value);

    if(inpval <= 0 && inpval >= 20){
        throw new Error("please enter valid number");
    }
    const product = await myApi(inpval);

    imgEl.src = product.image;
    itemId.textContent = String(product.id);
    itemCategory.textContent = product.category;
    itemTitle.textContent = product.title;
    itemPrice.textContent = String(product.price);
    itemDescription.textContent = product.description;
  } catch (error) {
    console.error("failed to fetch", error);
  }
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  myProduct();
});
