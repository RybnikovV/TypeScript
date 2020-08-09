interface Rect{
    readonly id: string;
    color?: string;
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    color: 'black',
    size:{
        width: 10,
        height: 5
    }
};
//const, но можем менять переменные внтури обьекта
rect1.color = 'white';
//а так уже нет
// rect1 = {
//     id: '1',
//     size:{
//         width: 10,
//         height: 10
//     }
// }


let rect4 = {} as Rect;

rect4 = {
    id: "123",
    size:{
        width: 10,
        height: 5
    }
};

//=================Наследование интрефейсов==============================
//extends 

interface RectWidthArea extends Rect {
    getArea: () => number //Указали, что это функция и тип дпнных который будет возращен
}

const react5: RectWidthArea = {
    id: '123',
    size: {
        width: 20,
        height: 5,
    },
    getArea(){  
        return this.size.width * this.size.height;
    },
}

let areaReact5 = react5.getArea();
console.log( areaReact5 );


//=========================================================================
interface IClock {
    time: Date,
    setTime(data: Date): void
}

class Clock implements IClock{
    time = new Date();

    setTime(data): void {
        this.time  = data;
    }
}
//=========================================================================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px'
};