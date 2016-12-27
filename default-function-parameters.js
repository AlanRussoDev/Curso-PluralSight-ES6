'use strict'

// o valor default será 1000
var getProduct = function (productId = 1000) {
    console.log(productId)
}

getProduct();


// o valor será "1000, "hardware"
var getProduct = function (productId = 1000, type = "software") {
    console.log(productId + ", " + type)
}

getProduct(undefined,"hardware" );


// o valor será "5.35"
var getProduct = function (price, tax = price * 0.07) {
    console.log(price + tax)
}

getProduct(5.00);


// o valor será "1"
var getProduct = function (price, tax = 0.07) {
    console.log(arguments.length)
}

getProduct(5.00);



