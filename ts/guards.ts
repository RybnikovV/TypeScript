// Вспомогательные констуркции помогающие работать с типами
 function strip(x: string | number){
    if (typeof x === 'number')  {
        return x.toFixed(2)
    };
    return x.trim()
}

strip(152);
//strip(true); // выдаст ошибку - Argument of type 'true' is not assignable to parameter of type 'string | number'.

//=============================================================

class MyResponse{
    header = 'response header';
    result = 'response result';
}

class MyError{
    header = 'response header';
    message = 'error message';
}

function handler(res: MyResponse | MyError) {
    //проверка на обьект instanceof
    if (res instanceof MyResponse){
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

// =====================================================

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType ){
    //...
}

setAlertType('success');
setAlertType('warning');

//ошибка - такого типа нет 
// setAlertType('default');
