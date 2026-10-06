const { createElement } = require("react");

// for get
function getFieldValue(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// for set 
function setOutput(elementId, area, functionName) {
    const outputArea = document.getElementById(elementId);
    outputArea.innerText = area;
    
    const li = document.createElement('li');
    li.innerText = functionName + ': '+ area + "cm";
    const btn = document.createElement('button');
    btn.innerText = 'Convert to m2';
    btn.classList.add('btn', 'btn-info', 'text-xl', 'text-white', 'font-bold', 'normal-case')
    
    li.appendChild(btn);

    document.getElementById('list-output').appendChild(li);
}

// Triangle 
function calculateTriangleArea() {
    const base = getFieldValue('triangle-base');
    //    for hight 
    const height = getFieldValue('triangle-height');
    // calculate area:
    const area = 0.5 * base * height;

    // display triangle area:
    setOutput('triangle-area', area, 'Triangle');
}

// Rectangle:
function calculateRectangleArea() {
    //   step:1
    const width = getFieldValue('rectangle-width');

    //   step:2
    const length = getFieldValue('rectangle-length');;

    const area = width * length;

    console.log(area);
    setOutput('rectangle-text-area', area, 'Rectangle');
}

// Parallelogram:
function calculateParallelogramArea() {
    const base = getFieldValue('parallelogram-base');
    console.log(base);
    //    parallelogram Height: 
    const hight = getFieldValue('parallelogram-hight');


    //area calculation: 
    const area = base * hight;
    setOutput('parallelogram-output-area', area, 'Parallelogram');

}

// rhombus:
function calculateRhombusArea() {
    // dimension 1

    const dimension1 = getFieldValue('dimension1');
    console.log(dimension1);
    // dimension 2
    const dimension2 = getFieldValue('dimension2');
    console.log(dimension2);

    // area calculation 
    const area = 0.5 * dimension1 * dimension2;
    setOutput('rhombus-output-area', area, 'Rhombus');
}

//Pentagon:  
function calculatePentagonArea() {
    // Pentagon p
    const p = getFieldValue('pentagon-p');
    console.log(p);
    // Pentagon b
    const b = getFieldValue('pentagon-b');
    console.log(b);

    // area calculation 
    const area = 0.5 * p * b;
    setOutput('pentagon-output-area', area, 'Pentagon');
}

// ellipse:
function calculateEllipseArea() {
    // Ellipse a
    const a = getFieldValue('ellipse-a');
    console.log(a);
    // Ellipse b

    const b = getFieldValue('ellipse-b');
    console.log(b);

    // area calculation 
    const area = 3.1416 * a * b;
    setOutput('ellipse-output-area', area, 'Ellipse');
}

// for hover effect : triangle: 
const triangleBox = document.getElementById('triangle-div');
triangleBox.addEventListener('mouseenter', function () {
    triangleBox.style.backgroundColor = '#FBBCED';
})
triangleBox.addEventListener('mouseout', function () {
    triangleBox.style.background = 'none';
})
// for hover effect : rectangle: 
const rectangleBox = document.getElementById('rectangle-div');
rectangleBox.addEventListener('mouseenter', function () {
    rectangleBox.style.backgroundColor = 'yellow';
})
rectangleBox.addEventListener('mouseout', function () {
    rectangleBox.style.background = 'none';
})
// for hover effect : parallelogram: 
const parallelogramBox = document.getElementById('parallelogram-div');
parallelogramBox.addEventListener('mouseenter', function () {
    parallelogramBox.style.backgroundColor = 'tomato';
})
parallelogramBox.addEventListener('mouseout', function () {
    parallelogramBox.style.background = 'none';
})
// for hover effect : rhombus: 
const rhombusBox = document.getElementById('rhombus-div');
rhombusBox.addEventListener('mouseenter', function () {
    rhombusBox.style.backgroundColor = '#69C7F0';
})
rhombusBox.addEventListener('mouseout', function () {
    rhombusBox.style.background = 'none';
})
// for hover effect : Pentagon: 
const pentagonBox = document.getElementById('pentagon-div');
pentagonBox.addEventListener('mouseenter', function () {
    pentagonBox.style.backgroundColor = '#00FF00';
})
pentagonBox.addEventListener('mouseout', function () {
    pentagonBox.style.background = 'none';
})
// for hover effect : ellipse 
const ellipseBox = document.getElementById('ellipse-div');
ellipseBox.addEventListener('mouseenter', function () {
    ellipseBox.style.backgroundColor = '#4B0082';
})
ellipseBox.addEventListener('mouseout', function () {
    ellipseBox.style.background = 'none';
})