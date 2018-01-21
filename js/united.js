function randomColor() {
    let colorSet = ["#003c3d", "#007879", "#00bbbf", "#42fcff"];
    let colorRandom = Math.floor(Math.random() * colorSet.length);
    return colorSet[colorRandom];
}

function randomShape() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = randomColor();
    //generates random dimension, position and shaoe
    let width = Math.floor(Math.random() * canvas.width);
    let height = Math.floor(Math.random() * canvas.height);
    let dimension = Math.floor(Math.random() * 75 + 25);
    let shapeRandom = Math.floor(Math.random() * 2);
    if (shapeRandom == 1) {
        drawSquare(context, width, height, dimension);
    } else {
        drawTriangle(context, width, dimension);
    }
}

function drawSquare(context, width, height, dimension) {
    context.fillRect(width, height, dimension, dimension);
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

function autoDraw() {
    let drawer = setInterval(function(){ randomShape() }, 1000);
}
