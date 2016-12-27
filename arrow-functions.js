'use strict'

var getprice1 = () => 5.99;
console.log(typeof getprice1 )
console.log(typeof getprice1() )

// um parametro para arrow function
var getprice2 = count => count * 2;
console.log(getprice2())


// dois parametros para arrow function
var getprice3 = (count,tax) => count * 4.00 * (1 +tax);
console.log(getprice2())

//igual o último mas usando agora o scopo em bloco
var getprice4 = (count,tax) => {
    var price =  count * 4.00;
    price *= (1 +tax);
    return price;
}


// referencia o #document
document.addEventListener('click',function(){
   console.log(this)
})

// referencia o windows
document.addEventListener('click',() => console.log(this))


// retorna o próprio objeto
var invoice = {
    number : 123,
    process : function(){
        console.log(this)
    }
}

invoice.process();


// retorna o Window
var invoice = {
    number : 123,
    process : () => console.log(this)
}

invoice.process();

// retorna o valor da propriedade number '123'
var invoice = {
    number : 123,
    process : function(){
        return () => console.log(this.number)
    }
}

invoice.process()();


// retorna o valor da propriedade number '123'
var invoice = {
    number : 123,
    process : function(){
        return () => console.log(this.number)
    }
}

var newInvoice = {
    number : 456
}

invoice.process().bind(newInvoice)();
invoice.process().call(newInvoice);