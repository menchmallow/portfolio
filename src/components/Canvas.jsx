import { useRef, useEffect } from "react";

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

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.baseRadius = radius;
    this.color = color;
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update(canvas, c, mouse) {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
      this.dx *= -1;
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
      this.dy *= -1;

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;

    if (Math.abs(dx) < this.radius + 30 && Math.abs(dy) < this.radius + 30) {
      if (this.radius < this.baseRadius + 40) this.radius += 1;
    } else if (this.radius > this.baseRadius) {
      this.radius -= 1;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw(c);
  }
}

const Canvas = () => {
  const canvasRef = useRef();
  const circlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    const scale = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.scale(scale, scale);
    };

    resizeCanvas();

    const canvasWidth = canvas.width / scale;
    const canvasHeight = canvas.height / scale;

    for (let i = 0; i < 100; i++) {
      const radius = 10 + Math.random() * 10;
      const x = Math.random() * (canvasWidth - radius * 2) + radius;
      const y = Math.random() * (canvasHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      circlesRef.current.push(new Circle(x, y, dx, dy, radius, color));
    }

    const animate = () => {
      c.clearRect(0, 0, canvas.width, canvas.height);
      circlesRef.current.forEach((circle) =>
        circle.update(canvas, c, mouseRef.current)
      );
      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
