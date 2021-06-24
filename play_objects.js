// Author: Carlos Rozas

var users = [{name: "Charlie", age:38}, {name: "Edward", age:18}, {name: "Sigfrid", age:99}];

// Imprime la edad de Edward
console.log(users[1].age);

// Imprime el nombre del Primer objeto
console.log(users[0].name);

// Imprime el nombre y la edad de cada usuario usando un for
for (var i = 0; i < users.length; i++){
    console.log(users[i].name, "-", users[i].age);
}