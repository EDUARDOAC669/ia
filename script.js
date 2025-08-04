
const perguntas = [
{
enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
alternativas: [
"Isso é assustador!",
"Isso é maravilhoso!"
]
},
{
enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
alternativas: ["Isso é assustador!",
"Isso é maravilhoso!",
    {
texto:
afirmacao,
}

]
},
{
texto:
afirmacao,
},
{
enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
alternativas: [
{
texto: "Isso é assustador!",
afirmacao: "afirmacao"
},
"Isso é maravilhoso!",
]
},
];
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
}
function mostraPergunta() {
perguntaAtual = perguntas[atual];
}
const caixaPerguntas = document.querySelector
(".caixa-perguntas");
caixaPerguntas.textContent
function mostraPergunta() {

perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}
function mostraAlternativas() {
    function mostraAlternativas() {
for(const alternativa of perguntaAtual.alternativas) {
}
}
}
mostraPergunta();
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraPergunta();