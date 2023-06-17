class Bola {
  constructor(ctx, jodador) {
    this.ctx = ctx;
    this.movendo = false;
    this.jogador = jodador;
    this.dirx = -1;
    this.diry = 0;
    this.vel = 3;
    this.largura = 20;
    this.altura = 20;
    this.x = this.ctx.canvas.width / 2 - this.largura / 2;
    this.y = this.ctx.canvas.height / 2 - this.altura / 2;
  }

  iniciar() {
    this.movendo = true;
    this.diry = 0;
  }

  gerenciar() {
    if (this.movendo) {
      // Movimentação
      this.x += (this.dirx * this.vel);
      this.y += (this.diry * this.vel);
      // Colisão com bordas laterais
      if (this.x >= (this.ctx.canvas.width - this.largura)) {
        this.dirx = -1;
        pj1++;
        this.resetarBola();
        this.dirx = -1;
      }
      if (this.x <= 0) {
        this.dirx = 1;
        pj2++;
        this.resetarBola();
        this.dirx = 1;
      }
      // Colisão com bordas superior e inferior
      if (this.y >= (this.ctx.canvas.height - this.altura)) {
        this.diry *= -1;
      }
      if (this.y <= 0) {
        this.diry *= -1;
      }
      // Colisão com o jogador
      if (
          (this.x <= this.jogador.x + this.jogador.largura && this.x + this.largura >= this.jogador.x) && 
          (this.y + this.altura >= this.jogador.y && this.y <= this.jogador.y + this.jogador.altura)
          ) {
            this.dirx = 1;
            this.diry = ((this.y + (this.altura / 2)) - (this.jogador.y + (this.jogador.altura / 2))) / 15;
      }
    }
  }

  resetarBola() {
    this.movendo = false;
    this.x = this.ctx.canvas.width / 2 - this.largura / 2;
    this.y = this.ctx.canvas.height / 2 - this.altura / 2;
    jogador.x = 0;
    jogador.y = this.ctx.canvas.height / 2 - jogador.altura / 2;
    cpu.x = this.ctx.canvas.width - cpu.largura;
    cpu.y = this.ctx.canvas.height / 2 - cpu.altura / 2;
  }

  desenhar () {
    this.gerenciar();
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(this.x, this.y, this.largura, this.altura);
  }
}
