
const game_border_color = "#9399b2";
const game_background_color = "#11111b";
const snake_color = "#a6e3a1";
const snake_border_color = "#40a02b";

var game_canvas = document.getElementById("gameCanvas");
var ctx = game_canvas.getContext("2d");

let snake = [
    { x: 150, y: 150 },
    { x: 140, y: 150 },
    { x: 130, y: 150 },
    { x: 120, y: 150 },
    { x: 110, y: 150 },
];

let dx = 10;
let dy = 0;
clearCanvas();

drawSnake();
slither();

function drawSnakeSegment(snakeSegment) {
    ctx.fillStyle = snake_color;
    ctx.strokeStyle = snake_border_color;

    ctx.fillRect(snakeSegment.x, snakeSegment.y, 10, 10);
    ctx.strokeRect(snakeSegment.x, snakeSegment.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakeSegment);
}

function slither() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();

}

function clearCanvas() {
    ctx.fillStyle = game_background_color;
    ctx.strokeStyle = game_border_color;

    ctx.fillRect(0, 0, game_canvas.width, game_canvas.height);
    ctx.strokeRect(0, 0, game_canvas.width, game_canvas.height);

}
