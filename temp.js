let iC = document.getElementById("C-input");
let iF = document.getElementById('F-input');
let iK = document.getElementById('K-input');
let resultC = document.getElementById("C-result");
let resultF = document.getElementById('F-result');
let resultK = document.getElementById('K-result');

function CtoF(){
    const c = parseFloat(iC.value);
    const f = (c)*(9/5) + 32;
    resultC.innerHTML = `Temperature in Fahrenhiet : ${f.toFixed(2)} &#176 F`;
};
function CtoK(){
    const c = parseFloat(iC.value);
    const k = c + 273.15;
    resultC.innerHTML = `Temperature in Kelvin : ${k.toFixed(2)} K`;
};
function FtoK(){
    const f = parseFloat(iF.value);
    const k = (f-32)*(5/9) + 273.15;
    resultC.innerHTML = `Temperature in Kelvin : ${k.toFixed(2)} K`;
};
function FtoC(){
    const f = parseFloat(iF.value);
    const c = (f-32)*(5/9);
    resultC.innerHTML = `Temperature in Celsius : ${c.toFixed(2)} &#176 C`;
};
function KtoC(){
    const k = parseFloat(iK.value);
    const c = k - 273.15;
    resultC.innerHTML = `Temperature in Celsius : ${c.toFixed(2)} &#176 C`;
};
function KtoF(){
    const k = parseFloat(iK.value);
    const f = (k - 273.15)*(9/5) + 32;
    resultC.innerHTML = `Temperature in Fahrenhiet : ${f.toFixed(2)} &#176 F`;
};