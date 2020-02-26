const arrayOfNumbers: Array<number> = [1, 2, 3];
const arrayOfStr: Array<string> = ['Vadim', 'name', 'My'];

function revese<T>(array: T[]) :T[]{
    return array.revese()
}

revese(arrayOfNumbers);
revese(arrayOfStr);