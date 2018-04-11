function addVAT() { 
    var price = document.vatCalc.price.value

if(price > 0) {	
    var vatResult = price * 1.2 
    // Round to two decimal places in order to correctly format the price result. 
    document.vatCalc.vat.value = vatResult.toFixed(2) 
} 

else {
alert("Please enter a valid price!") 
    }
} 

function subtractVAT() { 
    var price = document.vatCalc.price.value

if(price > 0) {	
    var vatResult = price / 1.2 
    // Round to two decimals places in order to correctly format the price result.
    document.vatCalc.vat.value = vatResult.toFixed(2) 
} 

else {
alert("Please enter a valid price!") 
    }
} 