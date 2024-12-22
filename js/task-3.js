function getElementWidth(content, padding, border){
    const number= Number.parseFloat(content);
    const number1=Number.parseFloat(padding);
    const number2=Number.parseFloat(border);
    return number+(2*number1)+(2*number2);
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 