// for get
function getFieldValue(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// for set 
function setOutput(elementId, area) {
    const outputArea = document.getElementById(elementId);
    outputArea.innerText = area;
}

// Triangle 
function calculateTriangleArea() {
    const base = getFieldValue('triangle-base');
    //    for hight 
    const height = getFieldValue('triangle-height');
    // calculate area:
    const area = 0.5 * base * height;

    // display triangle area:
    setOutput('triangle-area', area);
}

// Rectangle:
function calculateRectangleArea(){
//   step:1
        const width = getFieldValue('rectangle-width');
 
//   step:2
        const rectangleLengthInput = document.getElementById();
        const rectangleLengthText = rectangleLengthInput.value;
        const length = getFieldValue('rectangle-length');
        console.log(length);

        const area = width * length;
        console.log(area);
        const TextArea = document.getElementById('rectangle-text-area');
        TextArea.innerText = area;
}