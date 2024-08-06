    function increment(num: number) {
        return num + 1;
    }
        
    console.log(increment(100));
    
    function add(a:number, b:number) {
        return a + b;
    }
    console.log(add(100,100));
    
    function greet(name:string) {
    return `Hello, ${name}!`;
    }

    function isEven(num:number) {
        return num % 2 === 0;
      }
      
    function multiply(arr:number[]) {
    return arr.map(num => num * 2);
    }

    function findMax(arr:number[]) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return max;
      }

      function getLength(str:string) {
          return str.length;
      }

      function mergeObjects(obj1:object, obj2:object) {
        return { ...obj1, ...obj2 };
      }
      
      function fetchData(url:string) {
        return fetch(url)
          .then(response => response.json())
          .then(data => data)
          .catch(error => console.error('Error:', error));
      }

      function createPerson(name:string, age:number) {
        return {
          name: name,
          age: age,
          greet() {
            return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
          }
        };
      }

    // ジェネリクスの例
      function log<T>(a:T,b:T){
        console.log(`a:${a}, b${b}`)
      }

      log<string>("文字だよ","mozidayo")
      log<number>(1,2)
      log<boolean>(true,false)


      const id:number = 20001
      const userName:string = "Taro"
      const isAdmin: boolean = true
      let count :null | number = 0

      type User = {
        tag: "user" | "admin"
        id: number,
        name: string
      }

      const taro :User = {
        tag: "user",
        id: 1234,
        name: "taro"
      }
      
      
      
      
      

      
      