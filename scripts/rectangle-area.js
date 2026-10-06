function calculateRectangleArea(){
//   step:1
        const rectangleWidthInput = document.getElementById('rectangle-width');
        const rectangleWidthText = rectangleWidthInput.value;
        const width = parseFloat(rectangleWidthText);
        console.log(width);
//   step:2
        const rectangleLengthInput = document.getElementById('rectangle-length');
        const rectangleLengthText = rectangleLengthInput.value;
        const length = parseFloat(rectangleLengthText);
        console.log(length);

        const area = width * length;
        console.log(area);
        const TextArea = document.getElementById('rectangle-text-area');
        TextArea.innerText = area;
}