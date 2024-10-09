var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Q1
// HTMLButtonElementの追加
// オプショナルチューニング　”？”の追加
// functionとthisの組み合わせをアロー関数とbuttonに変更
const button = document.querySelector("#myButton");
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    button.textContent = "Clicked!";
});
// 別解
// (document.querySelector('#myButton') as HTMLButtonElement)?.addEventListener('click', () => {
//     (document.querySelector('#myButton') as HTMLButtonElement).textContent = 'Clicked!';
// })
// Q2
const submitButton = document.querySelector("#submitBtn");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", () => {
    var _a;
    const name = (_a = document.querySelector("#nameInput")) === null || _a === void 0 ? void 0 : _a.value;
    alert(`Hello, ${name}!`);
});
// Q3
const fetchName = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!data.ok) {
            throw new Error("Error");
        }
        const user = yield data.json();
        const userName = document.querySelector("#userName");
        userName ? (userName.textContent = user.name) : console.error("User name element not found");
        // if (userName) {
        //   userName.textContent = user.name;
        // } else {
        //   console.error("User name element not found");
        // }
    }
    catch (error) {
        console.error("Network Error");
    }
});
fetchName();
// Q4
const textInput = document.querySelector("#textInput");
textInput === null || textInput === void 0 ? void 0 : textInput.addEventListener("input", (e) => {
    const target = e.target;
    const outPut = document.querySelector("#output");
    outPut && target ? (outPut.textContent = target.value) : console.error("エラーだよ！！");
});
// Q4
const fetchProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch("https://fakestoreapi.com/products");
        if (!data.ok) {
            throw new Error("error");
        }
        const products = yield data.json();
        const container = document.querySelector("#productContainer");
        if (Array.isArray(products)) {
            products.forEach((product) => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                  <h3>${product.title}</h3>
                  <p>${product.description}</p>
                  <span>${product.price}</span>
              `;
                container.appendChild(card);
            });
        }
        else {
            console.log("error");
        }
    }
    catch (error) {
        console.error(error);
    }
});
fetchProduct();
// Q5
const myButton = document.getElementById("myButton2");
console.log(myButton);
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", function () {
    const event = new CustomEvent("myCustomEvent", {
        detail: { message: "Button clicked!" },
    });
    document.dispatchEvent(event);
});
document.addEventListener("myCustomEvent", function (event) {
    console.log(event.detail.message);
});
// Q6
class ApiService {
    //   getUser(userId: number)  {
    //     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => response.json());
    //   }
    getUserAsync(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                if (!data.ok) {
                    throw new Error("エラーだよ");
                }
                else {
                    const user = yield data.json();
                    return user;
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    //thenで書く
    getUserThen(userId) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("API通信のエラーです");
            }
        })
            .then((user) => {
            return user;
        })
            .catch((error) => {
            console.error(error);
            throw error; //　再度エラーを実行することでPromise<User>が保たれるらしい
        });
    }
}
const api = new ApiService();
api.getUserAsync(1).then((user) => {
    if (!user)
        return;
    const newUserBlock = document.querySelector("#newUserName1");
    newUserBlock ? (newUserBlock.textContent = user.name) : console.log("newUserName is null");
});
api.getUserThen(2).then((user) => {
    if (!user)
        return;
    const newUserBlock = document.querySelector("#newUserName2");
    newUserBlock ? (newUserBlock.textContent = user.name) : console.log("newUserName is null");
});
const superUser = {
    log: 0,
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
        street: "111",
        suite: "111",
        city: "111",
        zipcode: "111",
        geo: {
            lat: 1,
            lng: "ww",
        },
    },
    phone: "",
    website: "",
    company: {
        name: "a",
        catchPhrase: "aa",
        bs: "sa",
    },
};
console.log(superUser);
export {};
