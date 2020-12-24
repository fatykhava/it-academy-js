const WIDTH = 520;
const HEIGHT = 340;
const LINE_WIDTH = 1;
const RACKET_WIDTH = 20;
const BALL_SIZE = 20;
const RACKET_HEIGHT = 100;
const YELLOW = '#ffff00';
const RED = '#ff0000';
const BLACK = '#000';
const STEP = 5;
const DEGREE = 1.05;

const tennisCont = document.querySelector('.tennis-container');
const btnStart = document.querySelector('.btn-start');
const score = document.querySelector('.score');

const draw = SVG().addTo('.tennis-container').size(`${WIDTH}px`, `${HEIGHT}px`);
const bg = draw.rect(WIDTH, HEIGHT).attr({ stroke: RED, fill: YELLOW });

const line = draw.line(WIDTH / 2, 0, WIDTH / 2, HEIGHT).attr({ fill: RED });
line.stroke({ width: LINE_WIDTH, color: RED })

const leftRacket = draw.rect(RACKET_WIDTH, RACKET_HEIGHT);
const rightRacket = draw.rect(RACKET_WIDTH, RACKET_HEIGHT);
leftRacket.x(0).cy(HEIGHT / 2).attr({ class: 'left-racket', fill: RED });
rightRacket.x(WIDTH - RACKET_WIDTH).cy(HEIGHT / 2).attr({ class: 'right-racket', fill: RED });

const ball = draw.circle(BALL_SIZE).center(WIDTH / 2, HEIGHT / 2).attr({ class: 'ball hide', fill: BLACK });

let stepLeft = HEIGHT / 2;
let stepRight = HEIGHT / 2;
let vx = WIDTH / 2;
let vy = HEIGHT / 2;
let lastTime, animFrame;
let playerLeft = 0;
let playerRight = 0;

const stopGame = () => {
  lastTime = null;
  callback(null);
  btnStart.addEventListener('click', startGame);
}

const startGame = () => {
  ball.attr({ class: 'ball' });

  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38: {
        stepRight > RACKET_HEIGHT / 2 ? stepRight -= STEP : stepRight;
        rightRacket.cy(stepRight);
        break;
      }
      case 40: {
        stepRight >= (HEIGHT - RACKET_HEIGHT / 2) ? stepRight : stepRight += STEP;
        rightRacket.cy(stepRight);
        break;
      }
      case 17: {
        stepLeft >= (HEIGHT - RACKET_HEIGHT / 2) ? stepLeft : stepLeft += STEP;
        leftRacket.cy(stepLeft);
        break;
      }
      case 16: {
        stepLeft > RACKET_HEIGHT / 2 ? stepLeft -= STEP : stepLeft;
        leftRacket.cy(stepLeft);
        break;
      }
    }
  })

  function update(dt) {
    ball.dmove(vx * dt, vy * dt)

    let cx = ball.cx();
    let cy = ball.cy()
    let leftRacketY = leftRacket.y();
    let rightRacketY = rightRacket.y();

    if ((vx < 0 && cx <= (RACKET_WIDTH + BALL_SIZE / 2) && cy > leftRacketY && cy < leftRacketY + RACKET_HEIGHT) ||
      (vx > 0 && cx >= (WIDTH - RACKET_WIDTH - BALL_SIZE / 2) && cy > rightRacketY && cy < rightRacketY + RACKET_HEIGHT)) {
      vx = -vx * DEGREE;
    } else {
      if ((vy < 0 && cy <= BALL_SIZE / 2) || (vy > 0 && cy >= HEIGHT - BALL_SIZE / 2)) {
        vy = -vy
      }

      if ((vx < 0 && cx <= BALL_SIZE / 2) || (vx > 0 && cx >= WIDTH - BALL_SIZE / 2)) {
        if (vx < 0) { playerRight++ }
        else { playerLeft++ }

        vx = -vx

        score.innerHTML = `${playerLeft} : ${playerRight}`;

        stopGame();
      }
    }
  }

  function callback(ms) {
    if (lastTime) {
      update((ms - lastTime) / 1500);
    }

    lastTime = ms;
    animFrame = requestAnimationFrame(callback);
  }

  callback();
}

btnStart.addEventListener('click', startGame);
