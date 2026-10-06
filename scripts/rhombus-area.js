function calculateRhombusArea() {
    // dimension 1
    const dimension1Input = document.getElementById('dimension1');
    const dimension1Text = dimension1Input.value;
    const dimension1 = parseFloat(dimension1Text);
    console.log(dimension1);
    // dimension 2
    const dimension2Input = document.getElementById('dimension2');
    const dimension2Text = dimension2Input.value;
    const dimension2 = parseFloat(dimension2Text);
    console.log(dimension2);

    // area calculation 
    const area = 0.5 * dimension1 * dimension2;
    console.log(area);

document.getElementById('rhombus-output-area').innerText = area;



}