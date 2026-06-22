const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


// Para a digitação com efeito
const textos = [
    "Renan Navarro",
    "Front-End Developer",
    "UI Designer",
    "Web Developer"
];

let contadorTexto = 0;
let contadorLetra = 0;

const typing = document.getElementById("typing");

function escrever(){

    if(contadorLetra < textos[contadorTexto].length){

        // Escrevera o texto  
        typing.innerHTML += textos[contadorTexto].charAt(contadorLetra);

        contadorLetra++;

        // Tempo para escrever
        setTimeout(escrever, 170);

    } else {

      // Tempo para apagar
        setTimeout(apagar, 1500);
    }
}

function apagar(){

    if(contadorLetra > 0){

      //  Apagara as letras uma a uma
        typing.innerHTML = textos[contadorTexto].substring(0, contadorLetra - 1);

        contadorLetra--;

        // Tempo de resposta para apagar 
        setTimeout(apagar, 50);

    } else {

      // Para caso dar errado ele escreve as letras por letra 
        contadorTexto++;

        if(contadorTexto >= textos.length){
            contadorTexto = 0;
        }

        // Tempo para escrever a mensagem
        setTimeout(escrever, 300);
    }
}

escrever();


// Função para o video rodar e os controles aparecerem quando passar o mouse
const video = document.getElementById('meuVideo');
let tempoEntrada;
let tempoSaida;

// Quando o mouse ENTRA no vídeo
video.addEventListener('mouseenter', () => {
  clearTimeout(tempoSaida); // Cancela o sumiço se o mouse voltou rápido
  
  tempoEntrada = setTimeout(() => {
    video.setAttribute('controls', 'true');
  }, 500); // 500 milissegundos = meio segundo de delay
});

// Quando o mouse SAI do vídeo
video.addEventListener('mouseleave', () => {
  clearTimeout(tempoEntrada); // Cancela a aparição se o mouse saiu rápido
  
  tempoSaida = setTimeout(() => {
    video.removeAttribute('controls');
  }, 300); // 300 milissegundos de delay para sumir
});


