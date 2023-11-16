import React, { useEffect } from "react";
import "./index.css";
import "./App.css";

const Canvas = () => {
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    let breidd = 720;
    let haed = 480;
    let radius = 30;
    let x = radius + Math.random() * (breidd - radius * 2);
    let y = radius + Math.random() * (haed - radius * 2);
    let speedX = Math.random() * 20;
    let speedY = Math.random() * 20;

    if (canvas) {
      canvas.width = breidd;
      canvas.height = haed;

      const ctx = canvas.getContext("2d");

      function animate() {
        requestAnimationFrame(animate);

        ctx.clearRect(0, 0, breidd, haed);

        if (x + radius > breidd || x - radius < 0) {
          speedX = -speedX;
        }

        if (y + radius > haed || y - radius < 0) {
          speedY = -speedY;
        }

        x += speedX;
        y += speedY;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.stroke();

        ctx.fillStyle = "#282c34";
        ctx.fill();
      }

      animate();
    }
  }, []);

  return (
    <main className="main">
      <canvas id="canvas" className="canvas"></canvas>
    </main>
  );
};

export default Canvas;
