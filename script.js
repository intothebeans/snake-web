
const game_border_color = "#9399b2";
const game_background_color = "#11111b";

var game_canvas = document.getElementById("gameCanvas");
var ctx = game_canvas.getContext("2d");

let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
];
ctx.fillStyle = game_background_color;
ctx.strokeStyle = game_background_color;

ctx.fillRect(0, 0, game_canvas.width, game_canvas.height);
ctx.strokeStyle(0, 0, gameCanvas.width, game_canvas.height);

function drawSnakeSegment(snakeSegment) {
    ctx.fillStyle = "#a6e3a1";
    ctx.strokeStyle = "#40a02b";

    ctx.fillRect(snakeSegment.x, snakeSegment.y, 10, 10);
    ctx.strokeRect(snakeSegment.x, snakeSegment.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakeSegment());
}
