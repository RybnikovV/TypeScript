let hello: string = "lel";

let inLoading: boolean = false;

const int: number = 42;
const num: number = 4.2;

const numberArray: number[] = [1, 1, 2, 3, 5, 8];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8];

//tuple
const contact: [string, number] = ['Vlad', 123456];

//any
let variable: any = 42;
variable = "dfasdjk";
 

function sayMyName(name: string): void{
    console.log(name);
};
sayMyName("Гриша");


//Never
function throwError(message: string): never{ //лучше не исполтзовать
    throw new Error(message);
}



//Type
type Login = string;
type ID = string | number;

const login: Login = 'admin';

const id1: ID = 1234;
const id2: ID = '12345';
// const id3: ID = true;