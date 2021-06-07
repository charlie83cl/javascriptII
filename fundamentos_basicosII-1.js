/*
1 Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
*/
function sizeLarge(arreglo){
    for(var i = 0;i < arreglo.length;i++);
{
if(arreglo[i] > 0)
{
    arreglo[i] = "big";
}
}
return arreglo; 
}

arreglo = [-1,3,5,-5]
console.log(sizeLarge(arreglo));

/*
2 Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
 */

function MayorMenor(arreglo){
    var min = arreglo[0];
    var max = arreglo[0];
    for(var i=0;i<arreglo.length;i++)
    {
        if(arreglo[i] <= min)
        {
            min = arreglo[i];
        }
        if(arreglo[i] >= max)
        {
            max = arreglo[i];
        }
    }
    console.log(min);
    return max;
}
arreglo =[5,15,1];
console.log(MayorMenor(arreglo));

/*
6 Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números.
 La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
*/
function paresImpares(arr){
    var impares = 0;
    var pares = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            impares++;
            pares = 0;
        }else{
            pares++;
            impares = 0;
        }
        if (impares == 3){
            console.log("esto es Extraño!");
            impares = 0;
        }else if(pares == 3){
            console.log("Mas Aun!");
            pares = 0;
        }
    }
}
paresImpares([1,1,1,2,2,1,1,1])

/**
7 Contar Positivos -  Dado un array de números, 
crea una función para reemplazar el último valor 
con el número de valores positivos encontrados en el array. 
Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
**/

    function incrementadorSegundos(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementadorSegundos([1,2,3,4,5]));

/**
8
**/

function largoprevio(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}


console.log(largoprevio(["hola", "dojo", "quebkn"]));

/*
9 Agrega Siete - Construye una función que acepte un array. 
Devuelve un nuevo array con todos los valores del original, 
pero sumando 7 a cada uno. No alteres el array original. 
Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
*/

function sieteMas(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}

console.log(sieteMas([0,1,2,3]));

/*
10 Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, 
es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. 
(Pista: necesitarás intercambiar (swap) valores).
*/

function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(reverse([3,1,6,4,2,5]));

/*
11. Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga 
todos los valores del array original, pero negativos (no simplemente multiplicando 
    por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
*/

function negNum(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){        //si arr[i] es igual a 0 significa que solo identifica a los positivos
            arr[i] = arr[i]*-1; // todos los positivos seran multiplicados por -1
        }
        newArr.push(arr[i]);    //newArr.push empuja el contenido de los (arr[i]) dentro de lo que retornara mas abajo
    }
    return newArr; //retorna el nuevo arreglo newArr
}

console.log(negNum([1,10,20,-79,-3,5])); // imprime en consola la funcion negativeMaker


/*
12. Siempre hambriento - Crea una función que acepte un array e imprima 
(print) “yummy” cada vez que alguno de los valores sea “comida”. 
Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
*/

function hambre(arr){
    var gotFood = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "comida"){
            console.log("rico");
            gotFood = true;
        }
    }
    if (gotFood == false){
        console.log("Tengo Hambre");
    }
}

hambre([1,2,4,"hola","comida"]);
hambre([1,2,4,"hola"]);


/*
13.  Cambiar hacia el centro -  Dado un array, 
cambia el primer y último valor, el tercero 
con el ante penútimo, etc. Ejemplo: 
cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) 
cambia el array a [“pizza¨, 42, “Ada”, 2, true]. 
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. 
No es necesario devolver (return) el array esta vez. 
*/

function swapTowardCenter(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(swapTowardCenter([1,2,3,4,5,6]));

/*
14. Escala el Array - Dado un array arr y un número num, 
multiplica todos los valores en el array arr por el número num, 
y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
*/

function arrEscalar(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*num;
    }
    return arr;
}
console.log(arrEscalar([1,2,3,4],4));