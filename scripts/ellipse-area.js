function calculateEllipseArea(){
      // Ellipse a
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText = ellipseAInput.value;
    const a = parseFloat(ellipseAText);
    console.log(a);
    // Ellipse b
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText = ellipseBInput.value;
    const b = parseFloat(ellipseBText);
    console.log(b);

    // area calculation 
    const area = 3.1416 * a * b;
    console.log(area);

document.getElementById('ellipse-output-area').innerText = area;
}