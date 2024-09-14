"use strict";
// コンストラクタWhoの初期化時に'morita'(String)を渡しインスタンスプロパティnameに代入、 
// インスタンスメソッドgetNameの返り値がWho.prototype.name値になるいわゆる「classのようなもの」を作成してください 
// ※インスタンスメソッドはprototypeに代入してください
class Who {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return `My name is ${this.name}`;
    }
    getAhoName() {
        return `I am  ${this.age} years old`;
    }
}
const answer = new Who('aho', 12);
console.log(answer.getName(), answer.getAhoName());
console.log('グローバル関数でのthis', this);
const user = {
    id: 2,
    adana: "あほ",
    name: `スーパーあほ`,
    loveCall: function () {
        console.log(this.adana);
    }
};
user.loveCall();
class Aho {
    constructor(name) {
        this.name = name;
    }
}
const myName = new Aho('ぼけ');
console.log(myName.name);
const dangerButton = document.getElementById('danger-button');
dangerButton === null || dangerButton === void 0 ? void 0 : dangerButton.addEventListener('click', function () {
    if (this.classList.contains('pushed')) {
        this.innerHTML = '押してない！';
        this.classList.remove('pushed');
    }
    else {
        this.innerHTML = '押した！';
        this.classList.add('pushed');
    }
});
