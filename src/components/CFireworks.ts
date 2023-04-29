class CFireworks {
  radius: number;
  opacity: number;
  constructor(public ctx: CanvasRenderingContext2D, public x: number, public y: number, public dirx: number, public diry: number, public color: string) {
    this.radius = 2;
    this.opacity = 4;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
  update() {
    this.dirx *= 0.99;
    this.diry *= 0.99;
    this.diry += 0.1;

    this.x += this.dirx;
    this.y += this.diry;
    this.opacity -= 0.1;
    this.draw();
  }
}

export default CFireworks;
