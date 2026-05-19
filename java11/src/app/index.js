const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");
rulesBtn.onclick = () => rules.classList.add("show");
closeBtn.onclick = () => rules.classList.remove("show");
const ball = {
  x: 400,
  y: 300,
  size: 10,
  dx: 4,
  dy: -4
};
const paddle = {
  x: 360,
  y: 580,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0
};
let score = 0;
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fill();
}
function drawPaddle() {
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
}
function drawScore() {
  ctx.fillText(score, 750, 30);
}
function movePaddle() {
  paddle.x += paddle.dx;
}
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
  if (ball.x < 0 || ball.x > canvas.width) ball.dx *= -1;
  if (ball.y < 0) ball.dy *= -1;
  if (
    ball.x > paddle.x &&
    ball.x < paddle.x + paddle.w &&
    ball.y + ball.size > paddle.y
  ) {
    ball.dy = -4;
  }

  if (ball.y > canvas.height) {
    score = 0;
  }
}
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") paddle.dx = paddle.speed;
  if (e.key === "ArrowLeft") paddle.dx = -paddle.speed;
});
document.addEventListener("keyup", () => {
  paddle.dx = 0;
});
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawScore();
}
function update() {
  movePaddle();
  moveBall();
  draw();
  requestAnimationFrame(update);
}
update();