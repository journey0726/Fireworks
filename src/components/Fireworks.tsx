import CFireworks from "./CFireworks";
import { useEffect, useRef } from "react";
function Fireworks() {
  const cvs = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!cvs.current) return;
    const ctx = cvs.current.getContext("2d");

    const balls: InstanceType<typeof CFireworks>[] = [];
    function animation() {
      ctx!.fillStyle = "rgba(0,0,0,0.05)";
      ctx?.fillRect(0, 0, cvs.current!.width, cvs.current!.height);
      for (let i = 0; i < balls.length; i++) {
        balls[i].update();
      }
      requestAnimationFrame(animation);
    }
    animation();
    cvs.current.addEventListener("click", (e: MouseEvent) => {
      const nums = 400;
      const hd = (Math.PI * 2) / nums;
      for (let i = 0; i < nums; i++) {
        balls.push(new CFireworks(ctx!, e.x, e.y, Math.sin(hd * i) * (Math.random() * 7), Math.cos(hd * i) * (Math.random() * 7), `hsl(${Math.random() * 360}, 50%, 50%)`));
        if (balls[i].opacity < 0.1) {
          balls.splice(i, 1);
        }
      }
    });
  }, []);

  return (
    <canvas ref={cvs} width={window.innerWidth} height={window.innerHeight}>
      你的浏览器不支持canvas
    </canvas>
  );
}

export default Fireworks;
