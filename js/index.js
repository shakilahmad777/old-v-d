// Triangle Geometry Function //
const triangleBtn = document.querySelector('#triangle');

triangleBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#triBase').value);
    const height = Number(document.querySelector('#triHeight').value);

    if(base.valueOf() == 0 && height.valueOf() == 0 || base.valueOf() == 0 && height.valueOf() == -1) {
        // console.log('print')
        alert('Plase Type Your value')
        allResult.innerText = '';
    } 
    if (base.valueOf() == -1 && height.valueOf() == 0 || base.valueOf() == 0 && height.valueOf() == -1) {
        alert('Plase Type Your Positive value')
        allResult.innerText = '';
    }

    const baseElement = document.querySelector('#tBOutput');
    const heightElement = document.querySelector('#tHOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px';
    resultElement.innerHTML = `Triangle : ${(0.5 * base * height).toFixed(2)} cm^2`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m^2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});

// Rectangle Geomtry Function
const rectangleBtn = document.querySelector('#rectangle');

rectangleBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#recWidth').value);
    const height = Number(document.querySelector('#recLength').value);

    if(base.valueOf() == 0 && height.valueOf() == 0 || base.valueOf() == -1 && height.valueOf() == -1) {
        alert('Plase Type Your value')
        allResult.innerText = '';
    } 
    if (base.valueOf() == -1 && height.valueOf() == 0 || base.valueOf() == 0 && height.valueOf() == -1) {
        alert('Plase Type Your Positive value')
        allResult.innerText = '';
    }

    const baseElement = document.querySelector('#rWOutput');
    const heightElement = document.querySelector('#rLOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Rectangle : ${(base * height).toFixed(2)} cm^2`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m^2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});

// Parallelogram Geometry Function 
const parallelogramBtn = document.querySelector('#parallelogram');

parallelogramBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#paraBase').value);
    const height = Number(document.querySelector('#paraHeight').value);

    if(base.valueOf() == 0 && height.valueOf() == 0 || base.valueOf() == -1 && height.valueOf() == -1) {
        alert('Plase Type Your value')
        allResult.innerText = '';
    } 
    if (base.valueOf() == -1 && height.valueOf() == 0 || base.valueOf() == 0 && height.valueOf() == -1) {
        alert('Plase Type Your Positive value')
        allResult.innerText = '';
    }

    const baseElement = document.querySelector('#pBOutput');
    const heightElement = document.querySelector('#pHOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Parallelogram : ${(base * height).toFixed(2)} cm^2`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m^2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});

// Rhombus Geometry Function
const rhombusBtn = document.querySelector('#rhombus');

rhombusBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#pDiagonal').value);
    const height = Number(document.querySelector('#qDiagonal').value);

    if(base.valueOf() == 0 && height.valueOf() == 0 || base.valueOf() == -1 && height.valueOf() == -1) {
        alert('Plase Type Your value')
        allResult.innerText = '';
    } 
    if (base.valueOf() == -1 && height.valueOf() == 0 || base.valueOf() == 0 && height.valueOf() == -1) {
        alert('Plase Type Your Positive value')
        allResult.innerText = '';
    }

    const baseElement = document.querySelector('#rDOutput1');
    const heightElement = document.querySelector('#rDOutput2');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Rhombus : ${(0.5 * base * height).toFixed(2)} cm^2`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m^2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});


// Pentagon Geometry Function 
const pentagonBtn = document.querySelector('#pentagon');

pentagonBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#pentPremit').value);
    const height = Number(document.querySelector('#pentBase').value);

    if(base.valueOf() == 0 && height.valueOf() == 0 || base.valueOf() == -1 && height.valueOf() == -1) {
        alert('Plase Type Your value')
        allResult.innerText = '';
    } 
    if (base.valueOf() == -1 && height.valueOf() == 0 || base.valueOf() == 0 && height.valueOf() == -1) {
        alert('Plase Type Your Positive value')
        allResult.innerText = '';
    }

    const baseElement = document.querySelector('#pPOutput');
    const heightElement = document.querySelector('#pBOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Pentagon : ${(0.5 * base * height).toFixed(2)} cm^2`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m^2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});


// Ellipse Geometry Function
const ellipseBtn = document.querySelector('#ellipse');

ellipseBtn.addEventListener('click', function() {
    const base = Number(document.querySelector('#axisA').value);
    const height = Number(document.querySelector('#axisB').value);

    if(base.valueOf() == 0 && height.valueOf() == 0 || base.valueOf() == -1 && height.valueOf() == -1) {
        alert('Plase Type Your value')
        allResult.innerText = '';
    } 
    if (base.valueOf() == -1 && height.valueOf() == 0 || base.valueOf() == 0 && height.valueOf() == -1) {
        alert('Plase Type Your Positive value')
        allResult.innerText = '';
    }

    const baseElement = document.querySelector('#eAOutput');
    const heightElement = document.querySelector('#eBOutput');
    const allResult = document.querySelector('#all__result');

    baseElement.innerHTML = base;
    heightElement.innerHTML = height;
    const resultElement = document.createElement('li');
    resultElement.style.listStyle = 'orderList';
    resultElement.style.margin = '10px 0';
    resultElement.innerHTML = `Ellipse : ${(3.14 * base * height).toFixed(2)} cm^2`;
    allResult.appendChild(resultElement);

    const convartBtn = document.createElement('b');
    convartBtn.innerText = 'Convart to m^2';
    convartBtn.style.padding = '10px';
    convartBtn.style.color = 'white';
    convartBtn.style.background = '#1090D8';
    convartBtn.style.borderRadius = '4px';
    allResult.appendChild(convartBtn);

    allResult.style.display = 'flex';
    allResult.style.flexDirection = 'column';

});



function changeBGColor(id,) {
    const cardElement = document.getElementById(id)
    const bgColor = generateHEXColor();
    cardElement.style.backgroundColor = bgColor;
    cardElement.style.color = 'white';
};

function backgroundClear(){
    document.getElementById('card').style.backgroundColor = 'white';
}

function generateHEXColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}