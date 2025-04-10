
function sortNumbers(order){
    const firstNumber = parseFloat(document.getElementById("one").value );
    const secondNumber = parseFloat(document.getElementById("two").value );
    const thirdNumber = parseFloat(document.getElementById("three").value);

    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)){
        return document.getElementById("result").innerHTML = "Completa todos los campos"
    }
    const numbers = [firstNumber, secondNumber, thirdNumber];
    const sortedNumbers = numbers.sort((a, b) => a - b);

    if (order === 'asc'){
        console.log(sortedNumbers);
        return document.getElementById("result").innerHTML = "Los números en orden ascendente: "  + sortedNumbers.join(", ")
    }else if (order === 'dsc'){
        console.log(sortedNumbers.slice().reverse());
        return document.getElementById("result").innerHTML = "Los números en orden descendente: "  + sortedNumbers.slice().reverse().join(', ');
    }
    
}

