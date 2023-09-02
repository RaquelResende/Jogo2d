



function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imageDaEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentaCarro();
  movimentarAtor();
  movimentoRetornoCarro();
 verificaColisao();
  incluiPontos()
  marcarPontos()
}
