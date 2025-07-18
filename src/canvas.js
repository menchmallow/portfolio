const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

class Circle {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.baseRadius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;

    if (
      dx < this.radius + 20 &&
      dx > -this.radius - 20 &&
      dy < this.radius + 20 &&
      dy > -this.radius - 20
    ) {
      if (this.radius < this.baseRadius + 30) {
        this.radius += 1;
      }
    } else if (this.radius > this.baseRadius) {
      this.radius -= 1;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", (e) => {
  const scale = window.devicePixelRatio || 1;
  mouse.x = e.clientX * scale;
  mouse.y = e.clientY * scale;
});

function resizeCanvas() {
  const scale = window.devicePixelRatio || 1;

  canvas.width = window.innerWidth * scale;
  canvas.height = window.innerHeight * scale;

  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  c.setTransform(1, 0, 0, 1, 0, 0);
  c.scale(scale, scale);
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const colors = [
  "#ff91af",
  "#ffbe70",
  "#f7f27a",
  "#7de3f4",
  "#9ce6c5",
  "#c38aff",
  "#f49ce0",
  "#80dfb8",
  "#f9a08c",
  "#a6eec5",
];

const circles = [];

for (let i = 0; i < 100; i++) {
  const radius = 10 + Math.random() * 20;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const dx = (Math.random() - 0.5) * 5;
  const dy = (Math.random() - 0.5) * 5;
  const color = colors[Math.floor(Math.random() * colors.length)];
  circles.push(new Circle(x, y, radius, dx, dy, color));
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (const circle of circles) {
    circle.update();
  }
  requestAnimationFrame(animate);
}

animate();
