// Armazena as cores possíveis em uma matriz
var cores =  ["#5c3e90","#826ba9","#aa99c5"];

// Define o índice inicial da cor
var indiceCor = 0;

function alternarCores() {
  // Incrementa o índice da cor
  indiceCor++;

  // Se o índice for maior ou igual ao número de cores, volta para o início
  if (indiceCor >= cores.length) {
    indiceCor = 0;
  }

  // Define a nova cor de fundo do body
  document.body.style.backgroundColor = cores[indiceCor];
}

function validar(){
  let nome = document.getElementById("Nome").value 
  let telefone = document.getElementById("Telefone").value
  let email = document.getElementById("Email").value

  if (usuario == "" && senha == "") {
      alert("Preencha todos os campos.")
  }
} 