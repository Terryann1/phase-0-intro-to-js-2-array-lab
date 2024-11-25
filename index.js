// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];

//push method
function destructivelyAppendCat(name="Ralph"){
    cats.push(name);
}

//unshift method
function destructivelyPrependCat(name="Bob"){
    cats.unshift(name);
}

//pop method
function destructivelyRemoveLastCat(name="Garfield"){
    cats.pop(name);
}

//shift method
function destructivelyRemoveFirstCat(name="Milo"){
    cats.shift(name);
}

// ... spread operator
function appendCat(name){
    return[...cats, name];
}
let newarray=appendCat("Broom");
console.log("newarray");
console.log("cats");

function prependCat(name){
    return[name, ...cats];
}
let newcat=prependCat("Arnold");
console.log("newcat");
console.log(cats);

//slice operator
function removeLastCat(name){
    return cats.slice(0 ,cats.length-1);
    
}
let newCatArray=removeLastCat();
console.log(newCatArray);
console.log(cats);

function removeFirstCat(){
    return cats.slice(1);
}
let newCatsArray=removeFirstCat();
console.log(newCatsArray);
console.log(cats);







