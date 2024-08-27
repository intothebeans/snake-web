
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

main();
document.addEventListener("keydown", userInput);

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

function userInput(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const key_pressed = event.keyCode;
    const up = dy === -10;
    const down = dy === 10;
    const right = dx === 10;
    const left = dx === -10;

    if (key_pressed == LEFT_KEY && !right) {
        dx = -10;
        dy = 0;
    }

    if (key_pressed == RIGHT_KEY && !left) {
        dx = 10;
        dy = 0;
    }
    if (key_pressed == DOWN_KEY && !up) {
        dx = 0;
        dy = 10;
    }
    if (key_pressed == UP_KEY && !down) {
        dx = 0;
        dy = -10;
    }
}

function checkCollision() {
    // self collision 
    for (let i = 4; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            return true
        }
    }
    // border collision 
    return snake[0].x <= 0 || snake[0].x + 10 >= game_canvas.width || snake[0].y <= 0 ||
        snake[0].y + 10 >= game_canvas.height;
}

function main() {
    setTimeout(function onTick() {
        clearCanvas();
        slither();
        drawSnake();
        if (checkCollision()) { return }
        main();
    }, 100);
}
