
//Manipulando elementos da página
function botao()
{
    document.getElementById("click").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Você clicou");
}

function redireciona()
{
    window.open("https://www.linkedin.com/");//nova aba
   // window.location.href = "https://www.linkedin.com/"; //mesma aba
}

/*
function trocar()
{
    document.getElementById("trocar").innerHTML = "<b>Mouse over funcionou</b>";
}

function volta()
{
    document.getElementById("trocar").innerHTML = "Passe o mouse aqui";
}
*/
//Recebendo parametro
function trocar(elemento)
{
    elemento.innerHTML = "<b>Mouse over funcionou</b>";
}

function volta(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
}
function load()
{
    alert("Página Carregada");
}

function funcaoChange(elemento)
{
    console.log(elemento.value);
}



//funções
/*
function soma(n1, n2){
    return n1 + n2
}
alert(soma(5,10));

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert (setReplace("Boruto é o melhor anime!!!!!", "Boruto", "Naruto"));
*/
/*
var validar ;//variavel global

function validaIdade(idade){
    
    var validar ;//variavel local
    if (idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }

    return validar;
}

var idade = prompt("IDADE");
console.log(validaIdade(idade));
*/
//Data
/*var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
//Repetições
/*
var count;
for (count = 0; count < 5; count ++){
    alert(count);
}
*/

/*var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count ++;
 }*/




//Condicionais
/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}
else
{
    alert("menor de idade")
}
*/

//Dicionario
/*
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "Uva", cor: "roxo"}]
console.log(frutas);
*/
/*
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/* LISTA*//*
var lista = ["maça", "pêra", "laranja"];
console.log(lista[0]);

lista.push("uva");
console.log(lista);

lista.pop("pêra");
console.log(lista);

console.log(lista.length);

console.log(lista.reverse());

//transformar em string
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*AULA 1*//*
var nome = "Kauan";
//alert("Welcome "+ nome);

var idade = 31;
//var idade2 = 10;

//alert("Soma "+ idade+idade2);
var idade3 = "31";
var idade4 = "10";
//alert("Concatena "+ idade3 + idade4);

var frase = "Japão é o melhor time do mundo";

var n1 = 5;
var n2 = 2;
alert(n1 * idade2);//quebra se comentar a variavel idade2

console.log(nome);
console.log(n1 * n2);
console.log(idade + idade2);

console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão", "Brasil"));
*/