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
const doFetch = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!data.ok) {
            throw new Error("Error");
        }
        const user = yield data.json();
        console.log(user);
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
doFetch();
export {};
