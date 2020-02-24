class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name:string){
        return '[${name}]: Typescript version is ${this.version}'
    }
}

//===========================================================================

// class Car { 
//     readonly model: string;
//     readonly numberOfWheels: number = 4;

//     constructor(theModel: string) {
            //Здесь еще можем перезаписать переменные с типом readolnly
//         this.model = theModel
//     }
// }

//Эквивалет записи выше
class Car {
    readonly numberOfWheels: number = 4;

    constructor(readonly model: string) {}
}
//===========================================================================

//Модификаторы - public, private, protected
//protected - внутри класса + в внутри наследуемых классах
//private - только внутри определенного класса
class Animal{
    protected voice: string = '';
    public color: string = 'black';

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
        //this.go() - ошибка т.к private
    }
}

const cat = new Cat();
cat.setVoice('test');
//===========================================================================


//Абстрактные классы, полностью пропадают при компиляции в ES6
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void{
        console.log('component on render');
    }

    info(): string{
        return 'take some info';
    }
}