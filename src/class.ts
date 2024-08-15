
// 問題1: 簡単なクラスの作成
// 要件:

// Rectangleという名前のクラスを作成してください。
// このクラスには、幅 (width) と高さ (height) をプロパティとして持つコンストラクタを定義してください。
// getArea というメソッドを定義し、このメソッドが長方形の面積を返すようにしてください。
// getPerimeter というメソッドを定義し、このメソッドが長方形の周囲の長さを返すようにしてください。

class Rectangle {
    public width: number
    public height:number
    constructor(width:number,height:number) {
        this.width = width
        this.height = height
    }
    getArea():number{
        return this.width * this.height
    }
    getPerimeter():number{
        return (this.width + this.height) * 2
    }
}

const area = new Rectangle(5,10)
console.log(area.getArea());
console.log(area.getPerimeter());


// 問題2: 継承を使ったクラスの拡張
// 要件:

// 上記で作成した Rectangle クラスを基にして、Square というクラスを作成してください。このクラスは Rectangle を継承する形で作成します。
// Square クラスは1つの辺の長さ (sideLength) だけをコンストラクタの引数として取り、その辺の長さを利用して Rectangle のコンストラクタを呼び出してください。

class Square extends Rectangle {
    constructor(sideLength:number) {
        super(sideLength,sideLength)
    }
}

const areaOfSquare = new Square(4)
console.log(areaOfSquare.getArea());


// 問題3: 静的メソッドの使用
// 要件:

// Circle という名前のクラスを作成してください。
// このクラスは、半径 (radius) をプロパティとして持つコンストラクタを持ちます。
// getArea というインスタンスメソッドを定義し、このメソッドが円の面積を返すようにしてください。
// 円の面積を計算する際に使う Math.PI を利用してください。
// compareArea という静的メソッドを作成し、2つの Circle インスタンスを引数に取り、それぞれの面積を比較して、大きい方の円を返すようにしてください。

class Circle {
    public radius : number
    constructor(radius:number){
        this.radius = radius
    }
    public getArea():number{
        return this.radius * this.radius * Math.PI
    }
    // 静的メソッド
    public static compareArea(circle1:Circle,circle2:Circle){
        const area1 = circle1.getArea()
        const area2 = circle2.getArea()

        return area1 >= area2 ? area1 : area2
    }
}

const circle1 = new Circle(3)
const circle2 = new Circle(4)

// 静的メソッドはインスタンス化しなくても使える
console.log(circle2.getArea() === Circle.compareArea(circle1,circle2))


// 問題4: プライベートプロパティとゲッター・セッター
// 要件:

// BankAccount という名前のクラスを作成してください。
// このクラスは、口座番号 (accountNumber) と残高 (balance) を持つプロパティを持ちます。
// 残高 (balance) はプライベートプロパティにしてください（ES2020以降の #balance を使用）。
// 残高を取得するための getBalance メソッド、残高を増やす deposit メソッド、残高を減らす withdraw メソッドを定義してください。
// 残高が不足している場合、 withdraw メソッドはエラーメッセージを返してください。

class BankAccount {
    public accountNumber:string
    private balance:number

    constructor(accountNumber:string,balance:number,){
        this.balance = balance
        this.accountNumber = accountNumber
    }

    public getBalance() {
        return this.balance
    }

    public deposit(amount:number) {
        this.balance = this.balance + amount
    }
    public withdraw(amount:number) {
        if(this.balance < amount){
            console.log("残高が不足しています。");
            return
        }else {
            this.balance = this.balance - amount
        }
    }
}

const account = new BankAccount('123456789', 1000);
console.log(account.getBalance());  // 出力: 1000

account.deposit(500);
console.log(account.getBalance());  // 出力: 1500

account.withdraw(200);
console.log(account.getBalance());  // 出力: 1300

account.withdraw(1500);  // 出力: "残高が不足しています。"