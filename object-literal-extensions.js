'use strict'

// cria um objeto com o nome das propriedades com o nome da variavel e o valor 
var price = 5.99,
    quantity = 30;
    
 var obj = {
     price,
     quantity
 }   
    
 console.log(obj)   
 
 
// cria um objeto com o nome das propriedades com o nome da variavel e o valor, exemplo com função
var price = 5.99,
    quantity = 30;
    
 var obj = {
     price,
     quantity,
     calculateValue(){
         return this.price * this.quantity
     }
 }   
    
 console.log(obj.calculateValue())   
    
 // cria um objeto com o nome das propriedades com o nome da variavel e o valor, exemplo com função... 
//  a função irá retornar os valores das variaveis.. nao da propriedade.. aponta para o objeto window
var price = 5.99,
    quantity = 30;
    
 var obj = {
     price : 7,
     quantity : 1,
     calculateValue(){
         return this.price * this.quantity
     }
 }   
    
 console.log(obj.calculateValue())   
 
 
//  retorna a soma dos valores
 var price = 5.99,
    quantity = 30;
    
 var obj = {
     price : 7,
     quantity : 1,
     "calculate Value"(){
         return this.price * this.quantity
     }
 }   
    
 console.log(obj["calculate Value"]())  
 
//  trabalhando com nome de propriedades dinamicas

var field = "dynamicField";
var price = 5.99;
var productView = {
    [field] : price
}

var productView2 = {
    [field + '-001'] : price
}

console.log(productView);


       
    