import { Res } from "./types/api";

// Q1
// HTMLButtonElementの追加
// オプショナルチューニング　”？”の追加
// functionとthisの組み合わせをアロー関数とbuttonに変更
const button = document.querySelector("#myButton") as HTMLButtonElement;
button?.addEventListener("click", () => {
  button.textContent = "Clicked!";
});

// 別解
// (document.querySelector('#myButton') as HTMLButtonElement)?.addEventListener('click', () => {
//     (document.querySelector('#myButton') as HTMLButtonElement).textContent = 'Clicked!';
// })

// Q2
const submitButton = document.querySelector("#submitBtn") as HTMLButtonElement;

submitButton?.addEventListener("click", () => {
  const name = (document.querySelector("#nameInput") as HTMLInputElement)?.value;
  alert(`Hello, ${name}!`);
});

// Q3
const doFetch = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!data.ok) {
      throw new Error("Error");
    }
    const user: Res = await data.json();
    console.log(user);
    const userName = document.querySelector("#userName") as HTMLElement;

    userName ? (userName.textContent = user.name) : console.error("User name element not found");
    // if (userName) {
    //   userName.textContent = user.name;
    // } else {
    //   console.error("User name element not found");
    // }
  } catch (error) {
    console.error("Network Error");
  }
};
doFetch();

// Q4
const textInput = document.querySelector('#textInput') as HTMLElement
textInput?.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement
    const outPut = document.querySelector('#output')
    outPut && target ? (outPut.textContent  = target.value) : console.error('エラーだよ！！')
});