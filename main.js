function mudarCorCabecalho() {
    var cabecalho = document.getElementById("cabecalho");
    cabecalho.style.backgroundColor = "red";
  }
  
  function mudarCorCabecalho2() {
    var cabecalho = document.getElementById("cabecalho");
    cabecalho.style.backgroundColor = "green";
  }
  
  var slideIndex = 1;
mostrarSlide(slideIndex);

function mudarSlide(n) {
  mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

var carouselVisible = true;

function toggleCarousel() {
  var carousel = document.getElementById("carousel");
  carousel.style.display = carouselVisible ? "none" : "block";
  carouselVisible = !carouselVisible;
}

var countdownElement = document.getElementById("countdown");
var daysElement = document.getElementById("days");

function calcularDiasRestantes() {
  var dataAniversario = new Date("2023-11-16");
  var dataAtual = new Date();

  var diferencaTempo = dataAniversario - dataAtual;
  var diasRestantes = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

  daysElement.textContent = diasRestantes;
}

calcularDiasRestantes();
