console.log("Hello World JS");
let calculo = "";
let ultimoComando = "";
let displayOperation = document.getElementById("operation")

document.addEventListener("keypress", function(evento){
    console.log(evento.key)
    
    if(evento.key == '1' || evento.key == '2' || evento.key == '3' ||
        evento.key == '4' || evento.key == '5' || evento.key == '6' ||
        evento.key == '7' || evento.key == '8' || evento.key == '9' ||
        evento.key == '0' || evento.key == '*' || evento.key == '/' ||
        evento.key == '+' || evento.key == '-' || evento.key == '.' ||
        evento.key == '(' || evento.key == ')'
    ){
       return calcular(evento.key)

    }

    if(evento.key == 'Enter'){
        gerarResultado();
    }
});
displayOperation.textContent = "0";



function calcular(value){
    
    if(value == ultimoComando && (ultimoComando == '+' || ultimoComando == '-' ||
    ultimoComando == '*' || ultimoComando == '/')){
        return;
    }
    ultimoComando = value;
    
    calculo += value;
    
    console.log("calcular: "+ calculo);
    
    displayOperation.textContent = calculo.replaceAll('*','x');

}

function limparConta(){
    console.log("Limpar Conta: "+ calculo);
    calculo = "";
    displayOperation.textContent = "0";

    document.getElementById("buttonAc").textContent = "CE"
}

function gerarResultado(){
    if(calculo != ""){
        console.log("Rerar Resultado: "+ calculo);
    
        let resultado = ""+eval(calculo);
        displayOperation.textContent = resultado.replaceAll('*','x')
        console.log("O resultado da conta "+ calculo+ " e: "+resultado);
        calculo = resultado;
        
        document.getElementById("buttonAc").textContent = "AC"
    }
    
}

function eventoDoTeclado(event){
    console.log(event);
}