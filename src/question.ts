import { SuperUser } from "./types/name.d";
import { Product, User } from "./types/name";

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
const fetchName = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!data.ok) {
      throw new Error("Error");
    }
    const user: User = await data.json();
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
fetchName();

// Q4
const textInput = document.querySelector("#textInput") as HTMLElement;
textInput?.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  const outPut = document.querySelector("#output");
  outPut && target ? (outPut.textContent = target.value) : console.error("エラーだよ！！");
});

// Q4
const fetchProduct = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    if (!data.ok) {
      throw new Error("error");
    }
    const products: Product[] = await data.json();
    const container = document.querySelector("#productContainer") as HTMLElement;
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
    } else {
      console.log("error");
    }
  } catch (error) {
    console.error(error);
  }
};

fetchProduct();

// Q5
const myButton = document.getElementById("myButton2") as HTMLButtonElement;
console.log(myButton);

myButton?.addEventListener("click", function () {
  const event = new CustomEvent("myCustomEvent", {
    detail: { message: "Button clicked!" },
  });
  document.dispatchEvent(event);
});

document.addEventListener("myCustomEvent", function (event) {
  console.log((event as CustomEvent).detail.message);
});

// Q6
class ApiService {
  //   getUser(userId: number)  {
  //     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => response.json());
  //   }

  async getUserAsync(userId: number): Promise<User | undefined> {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!data.ok) {
        throw new Error("エラーだよ");
      } else {
        const user: User = await data.json();
        return user;
      }
    } catch (error) {
      console.error(error);
    }
  }

  //thenで書く
  getUserThen(userId: number): Promise<User> {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("API通信のエラーです");
        }
      })
      .then((user: User) => {
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
  if (!user) return;
  const newUserBlock = document.querySelector("#newUserName1") as HTMLElement;
  newUserBlock ? (newUserBlock.textContent = user.name) : console.log("newUserName is null");
});

api.getUserThen(2).then((user) => {
  if (!user) return;
  const newUserBlock = document.querySelector("#newUserName2") as HTMLElement;
  newUserBlock ? (newUserBlock.textContent = user.name) : console.log("newUserName is null");
});

const superUser: SuperUser = {
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
