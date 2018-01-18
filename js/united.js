function randomColor() {
    let colorSet = ["#003c3d", "#007879", "#00bbbf", "#42fcff"];
    let colorRandom = Math.floor(Math.random() * colorSet.length);
    return colorSet[colorRandom];
}

function randomShape() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = randomColor();

    //generates random dimension and position
    let width = Math.floor(Math.random() * canvas.width);
    let height = Math.floor(Math.random() * canvas.height);
    let dimension = Math.floor(Math.random() * 75 + 25);

    let shapeRandom = Math.floor(Math.random() * 4);

    switch (shapeRandom) {
        case 0:
            drawSquare(context, width, height, dimension);
            break;
        case 1:
            drawTriangle(context, width, dimension);
            break;
        case 2:
            drawCircle(context, width, height, dimension);
            break;
        default:
            drawLine(context, width, height, dimension);
    }
}

function drawSquare(context, width, height, dimension) {
    context.fillRect(width, height, dimension, dimension);
}

function drawCircle(context, width, height, dimension) {
    context.beginPath();
    context.arc(dimension,dimension/2,dimension/2,0,2*Math.PI);
    context.fill();
    context.stroke();
}

function drawTriangle(context, width, dimension) {
    var dots = [];
    for (let i = 0; i < 4; i++) {
        var temp = Math.floor(Math.random() * (width - dimension) + dimension);
        dots.push(temp);
    }
    context.beginPath();
    context.moveTo(dots[0], dots[1]);
    context.lineTo(dots[2], dots[0]);
    context.lineTo(dots[2], dots[3]);
    context.fill()
}

function drawLine(context, width, height, dimension) {
    var dots = [];
    for (let i = 0; i < 4; i++) {
        var temp = Math.floor(Math.random() * (width - dimension) + dimension);
        dots.push(temp);
    }

    context.moveTo(dots[0],dots[1]);
    context.lineTo(dots[2],dots[3]);
    context.stroke();
}

function autoDraw() {
    let drawer = setInterval(function(){ randomShape() }, 500);
}
