//Перегрузка функций
interface MyPosition{
    x: number | undefined,
    y: number | undefined
}
interface MyPositionWidthDefault extends MyPosition{
    default: string
}


function position(): MyPosition;
function position(a: number): MyPositionWidthDefault;
function position(a: number, b: number): MyPosition;

function position(a?: any, b?: any) {
    if(!a && !b){
        return {x: undefined, y: undefined}
    };

    if(a && !b){
        return {x: a, y: undefined, default: '45'}
    };

    return {x: a, y: b}
}

console.log('Empty: ', position() );
console.log('One param: ', position(45));
console.log('Two params: ', position(10, 15));
// Компилято;р упадет
//console.log('compiling error',position('10',15));
// console.log('Three params: ', position(10, 15, 100));