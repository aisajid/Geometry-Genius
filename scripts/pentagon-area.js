function calculatePentagonArea(){
     // Pentagon p
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPText = pentagonPInput.value;
    const p = parseFloat(pentagonPText);
    console.log(p);
    // Pentagon b
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBText = pentagonBInput.value;
    const b = parseFloat(pentagonBText);
    console.log(b);

    // area calculation 
    const area = 0.5 * p * b;
    console.log(area);

document.getElementById('pentagon-output-area').innerText = area;
}