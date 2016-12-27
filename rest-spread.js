'use strict'

// retorna um array "['search','advertising']"
var showCategories = function(productID, ...categories){
    console.log('categories')
    console.log(categories)
}

showCategories('123','search','advertising');

// retorna um array vazio "[]" por default
var showCategories = function(productID, ...categories){
    console.log('categories')
    console.log(categories)
}

showCategories('123');


// criando um novo array apartir de outro
var price = [2,4,6]
var newPrice = [...price];
console.log(newPrice)


// quebrando o array em vários numeros, nao funciona sozinho... retorna 5
var maxCode = Math.max(..."12345");
console.log(maxCode)

// retorna um array ['a','b','c','d','e','f','g','h']

var array = ['a', ...'bcdefg','h'];
console.log(array)

