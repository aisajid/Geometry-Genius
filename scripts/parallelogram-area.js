function calculateParallelogramArea(){
//    parallelogram Base 
    const parallelogramBaseInput=  document.getElementById('parallelogram-base');
   const parallelogramBaseText = parallelogramBaseInput.value;
   const base = parseFloat(parallelogramBaseText);
   console.log(base); 
//    parallelogram Height: 
const parallelogramHightInput = document.getElementById('parallelogram-hight');
const parallelogramHightText= parallelogramHightInput.value;
const hight = parseFloat(parallelogramHightText);
console.log(hight);

//area calculation: 
const area = base * hight;
console.log(area);
const parallelogramOutput = document.getElementById('parallelogram-output-area');
parallelogramOutput.innerText = area;

}