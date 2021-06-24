//1 Obtén del 1 al 255: Escribe una función que devuelve un array con todos 
//los números del 1 al 255.

function crearArr(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}

var resultado = crearArr();
console.log(resultado);

//2 Consigue pares hasta 1000: Escribe una función que entregue 
//la suma de todos los números pares del 1 al 1000 - 
//Puedes usar un operador de módulo para este ejercicio. 


function obtSum(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}
console.log(obtSum());


//3 Suma impares hasta 5000: Escribe una función que devuelva la suma de 
//todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function obtSumImpares(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
            console.log(i);
        }
    }
    return sum;
}
console.log(obtSumImpares());


//4 Itera un array: Escribe una función que devuelva 
//la suma de todos los valores dentro de un array 
//(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function iterar(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
console.log(iterar([1,2,4,8,21,102]));


//5 Encuentra el mayor (max): Dado un array con múltiples valores, 
//escribe una función que devuelva el número mayor 
//(ej: para [-3,3,5,7] el número mayor (max) es 7). 

function max(numArr){
    var max = numArr[0]; //variable con el valor maximo del arreglo numerico
    for (var i = 0; i < numArr.length; i++){ // el for evalua el valor del indice 
        if (numArr[i] > max){
        max = numArr[i];
        }
    }
    return max;
}
console.log(max([-3,-5,-6,-2]));

//6 Encuentra el promedio (prom): Dado un array con múltiples valores, 
//escribe una función que devuelva el promedio de los valores 
//(ej: para [1,3,5,7,20] el promedio es 7.2).

function encProm(numArr){
    var sum = 0;
    var prom = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    prom = sum / numArr.length;
    return prom;
}
console.log(encProm([1,3,5,7,19,20,21,101]));

//7 Array de impares: Escribe una función que devuelva 
//un array de todos los números impares entre 1 y 50 
//(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function imparArray(){
    var arr = [];
    for (var x = 1; x < 50; x+=2){
        arr.push(x);
    }
    return arr;
}
imparArray();


//8 Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve 
//los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, 
//tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mayorQueY(arr, y){
    var counter = 0;
    // iterar a traves del arreglo
    for (var idx = 0; idx < arr.length; idx++){
        // evalua si el valor indicado es mayor que y
        if (arr[idx] > y){
            // si lo es continua uno arriba
            counter++;
        }
    }
    return counter;
}
console.log(mayorQueY([1,3,5,7], 2));


//9 Cuadrados: Dado un array con múltiples valores, 
//escribe una función que reemplace cada valor por el 
//cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]). 

function Cuadrados(arr){
    for (var idx = 0; idx < arr.length; idx++){
        // multiplica por si mismo el valor que asignene en el indice
        arr[idx] = arr[idx]*arr[idx];
    }
}
Cuadrados([1, -2, 5, 10]);

//10 Negativos: Dado un array con múltiples valores, escribe una función que 
//reemplace cualquier número negativo dentro del array por 0. 
//Cuando el programa esté listo, el array no debiera contener números negativos 
//(ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function sinNegativos(arr){
    for (var idx = 0; idx < arr.length; idx++){
        // examina cada valor y evalua si es negativo
        if (arr[idx] < 0){
            arr[idx] = 0;
        }
    }
    console.log(arr);
}
sinNegativos([-1,2,-5]);


//11 Max/Min/Avg: Dado un array con múltiples valores, 
//escribe una función que devuelva un nuevo array que solo 
//contenga el valor mayor (max), menor (min) y promedio (avg) 
//del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
console.log(maxMinAvg([2,10,-3,4]));



//12 Intercambia Valores: Escribe una función que intercambie el primer y 
//el último valor de cualquier array. La extensión mínima predeterminada del array es 2 
//(ej: [1,5,10,-2] será [-2,5,10,1]). 

function swap(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var tester = [1,4,10,-2];
swap(tester);
console.log(tester);


//13 De Número a String: Escribe una función que tome un array de números y 
//reemplace cualquier valor negativo por el string ‘Dojo’. 
//Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function noNegativesDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        // examina cada valor y evalua si es negativo
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
noNegativesDojo([-1,2,-5]);
