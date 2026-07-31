// ===== MODO ESCURO =====

const tema = document.getElementById("tema");

tema.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

// ===== HOMENAGEM =====

const mensagens=[

"🎤 Feliz Dia do Cantor! Obrigado por transformar sentimentos em música.",

"🎶 Toda grande música começa com uma voz cheia de emoção.",

"❤️ A arte de cantar inspira milhões de pessoas todos os dias.",

"🌟 Que nunca falte música para alegrar nossos corações.",

"🎵 Cada cantor deixa sua marca na história da música."

];

const botao=document.getElementById("homenagem");

botao.addEventListener("click",()=>{

let numero=Math.floor(Math.random()*mensagens.length);

alert(mensagens[numero]);

});

// ===== ANIMAÇÃO AO ROLAR =====

const cards=document.querySelectorAll(".card,.cantor");

const aparecer=()=>{

cards.forEach(card=>{

const topo=card.getBoundingClientRect().top;

if(topo<window.innerHeight-100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

};

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

});

window.addEventListener("scroll",aparecer);

aparecer();

// ===== RELÓGIO NO TÍTULO =====

function atualizarTitulo(){

const agora=new Date();

const hora=agora.toLocaleTimeString("pt-BR");

document.title="🎤 Dia do Cantor | "+hora;

}

setInterval(atualizarTitulo,1000);

// ===== FRASES AUTOMÁTICAS =====

const frases=[

"A música conecta pessoas de diferentes culturas.",

"Cantar é transformar emoções em arte.",

"A voz humana é um dos instrumentos mais belos.",

"Os cantores inspiram gerações com talento e dedicação."

];

let indice=0;

setInterval(()=>{

const frase=document.querySelector(".frase h2");

if(frase){

frase.textContent=frases[indice];

indice++;

if(indice>=frases.length){

indice=0;

}

}

},5000);
