<script type"text/javascript">
// Função do botão rendimento
var rend = document.getElementsByClassName("botao-rendimento");


//Seleciona os botões liquido e bruto
var bruto = rend[0];
var liquido = rend[1];

//Aplica o Estilo
function mudarEstiloBruto() {
	bruto.style.background = "#420707";
	bruto.style.color = "white";
}
function mudarEstiloLiquido() {
liquido.style.background = "#420707";
liquido.style.color = "white";
}

//Retira o Estilo
function setaEstiloBruto(){
	bruto.style.background = "#ecececd5";
	bruto.style.color = "black";
}
function setaEstiloLiquido(){
	liquido.style.background = "#ecececd5";
	liquido.style.color = "black";
}

//Evento ao clicar
bruto.addEventListener("click",() => {    
	mudarEstiloBruto();
	setaEstiloLiquido();
	valorRend = "bruto"
});
liquido.addEventListener("click",() => {    
mudarEstiloLiquido();
setaEstiloBruto(); 
valorRend = "liquido";
});


//Função do botão tipo de indexação
var ind = document.getElementsByClassName("botao-indexacao");

//Seleciona os botões liquido e bruto
var pre = ind[0];
var pos = ind[1];
var fixado = ind[2];

//Aplica o Estilo
function mudarEstiloPre() {
	pre.style.background = "#420707";
	pre.style.color = "white";
}
function mudarEstiloPos() {
	pos.style.background = "#420707";
	pos.style.color = "white";
}
function mudarEstiloFixado() {
	fixado.style.background = "#420707";
	fixado.style.color = "white";
}

//Retira o Estilo
function setaEstiloPre(){
	pre.style.background = "#ecececd5";
	pre.style.color = "black";
}
function setaEstiloPos(){
	pos.style.background = "#ecececd5";
	pos.style.color = "black";
}
function setaEstiloFixado(){
	fixado.style.background = "#ecececd5";
	fixado.style.color = "black";
}



//Evento ao clicar
pre.addEventListener("click",() => {    
	mudarEstiloPre();
	setaEstiloPos();
	setaEstiloFixado();
	valorInd = "pre";
});
pos.addEventListener("click",() => {    
	mudarEstiloPos();
	setaEstiloPre();
	setaEstiloFixado(); 
	valorInd = "pos";
});
fixado.addEventListener("click",() => {    
	mudarEstiloFixado();
	setaEstiloPos();
	setaEstiloPre();
	valorInd = "fixado";
});

functionEnviar(){
	valorInd.submit;
	valorRend.submit;

}

paraInd = '/indicadores:'+valorInd +'/';
paraRend = '/rendimento:'+valorRend;
document.formulario.action = '/simular'+ paraRend + paraInd;
document.formulario.submit();         
</script>
var prazo = document.getElementsByClassName("prazo")[0].value;
var erro = document.getElementsByClassName("erro");


if(isNaN(prazo) == true){
  var elem = document.createElement('label');
  elem.innerHTML = "O campo prazo deve conter apenas número.";
  document.getElementsByClassName('erro')[0].appendChild(elem);
  elem.style.color="red";
  elem.style.fontSize="0.7rem";
  elem.style.fontWeight = "400";
  elem.style.lineheight= "0.4px";
}

