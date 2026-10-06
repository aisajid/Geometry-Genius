function calculateTriangleArea(){
//    for base 
    const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
//    for hight 
const triangleHeightInput = document.getElementById('triangle-height');
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat(triangleHeightText);

const area = 0.5 * base * height ;
// display triangle area:
const triangleArea = document.getElementById('triangle-area');
triangleArea.innerText = area;
}

