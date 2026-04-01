

function getvalues(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return [num1,num2];
}
function add(){
    const [num1,num2] = getvalues();
    const result = num1 + num2;
    document.getElementById('result').innerHTML = `<h1 class=" output  fw-bold text-center"> ${result} </h1>`;
}
function sub(){
    const [num1,num2] = getvalues();
    const result = num1 - num2;
    document.getElementById('result').innerHTML = `<h1 class=" output  fw-bold text-center"> ${result} </h1>`;
}
function multi(){
    const[num1 , num2]=getvalues();
    const result = num1*num2;
    document.getElementById('result').innerHTML = `<h1 class=" output  fw-bold text-center"> ${result} </h1>`;
}
function divide(){
    
    const[num1 , num2]=getvalues();
    if (num2 === 0) {
        document.getElementById('result').innerHTML = `<p class="  fw-bold  text-danger text-center"> Cannot divide by zero </p>`;
    }
else{
    const result = (num1/num2).toFixed(2);
}
}
function clearAll(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = '';
}
