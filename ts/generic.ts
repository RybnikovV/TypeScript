//"дженерики — это возможность создавать компоненты, работающие не только с одним, а с несколькими типами данных".
// Указываем обьект и из чего он состоит
const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfStr: Array<string> = ['Vadim', 'is', 'name', 'My'];

function reverse<T>( array: T[]) :T[]{
    return array.reverse();
}

console.log( reverse <number>(arrayOfNumbers) );
console.log( reverse (arrayOfStr) );


//Пример джинереков в контексте тождественной функции
function identity <T,U>(value: T, message: U): T {
    return value;
}
console.log( identity<Number, String>(1, 'yep') ); // 1
// console.log( identity<String,>('yep') ); //error

////////////////////////////////////////////////////////

interface GenericInterface<U> {
    value: U
    getIdentity: () => U
  }
  
  class IdentityClass<T> implements GenericInterface<T> {
    constructor(public value: T) {
      this.value = value
    }
  
    getIdentity () : T {
      return this.value
    }
  
  }
  
  const myNumberClass = new IdentityClass<Number>(1)
  console.log(myNumberClass.getIdentity()) // 1
  
  const myStringClass = new IdentityClass<string>("Hello!")
  console.log(myStringClass.getIdentity()) // Hello!

////////////////////////////////////////////////////////

type Student = {
    name: string;
    age: number;
    hasScar: boolean;
};
  
const students: Student[] = [
    { name: "Harry", age: 17, hasScar: true },
    { name: "Ron", age: 17, hasScar: false },
    { name: "Hermione", age: 16, hasScar: false }
];

function getBy<T, P extends keyof T>(model: T[], prop: P, value: T[P]): T | null {
    return model.filter(item => item[prop] === value)[0]
}

// const result = getBy(students, "naem", "Hermione");//Error
const result = getBy(students, "name", "Hermione");
