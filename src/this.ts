// コンストラクタWhoの初期化時に'morita'(String)を渡しインスタンスプロパティnameに代入、 
// インスタンスメソッドgetNameの返り値がWho.prototype.name値になるいわゆる「classのようなもの」を作成してください 
// ※インスタンスメソッドはprototypeに代入してください

class Who  {
    name: string;
    age: number
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age
    }

    getName() {
        return `My name is ${this.name}`
    }
    getAhoName() {
        return `I am  ${this.age} years old`
    }
}

const answer = new Who('aho',12)
console.log(answer.getName(),answer.getAhoName())
console.log('グローバル関数でのthis',this);

type User = {
    id:number,
    adana: string,
    name: string,
    loveCall:() => void
}

const user:User = {
    id: 2,
    adana: "あほ",
    name: `スーパーあほ`,
    loveCall: function() {
        console.log(this.adana);
    }
}
user.loveCall();

class Aho {
    name:string
    constructor(name:string){
        this.name = name
    }
}
const myName = new Aho('ぼけ')
console.log(myName.name);

const dangerButton = document.getElementById('danger-button')
dangerButton?.addEventListener('click', function () {
    console.log(this);
})




