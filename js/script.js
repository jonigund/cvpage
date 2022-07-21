
//obtem os dados dos campos do formulario    
let entradaNome = document.getElementById("nome").value;
let entradaEmail = document.getElementById("email").value;
let entradaMensagem = document.getElementById("mensagem").value;

// seta o endereço do servidor local, no caso armazenado em BD SQL
//let url = "http://127.0.0.1:5500/contform.html"
    

// agrupamento dos campos

body = {
    "name": entradaNome,
    "email": entradaEmail,
    "message": entradaMensagem
}


// funcao que valida e faz o envio dos dados para o servidor local pela funcao postar
function enviarEmail(e){
    e.preventDefault()
    console.log(body)
    //postar()  -  comentada pois seria preciso configurar um servidor smtp
    if(entradaNome != "" & entradaEmail != "" & entradaMensagem != ""){
        alert("Seu contato foi recebido, em breve retornaremos.")
    }else 
    alert("Todos os campos devem ser preenchidos!")
}


// funcao que converte os campos de dados em arquivo json para postar
function postar(url, body){
    console.log(body)
    let Request = new XMLHttpRequest()
    Request.open("POST", url, true)
    Request.setRequestHeader("Content-type", "application/json")
    Request.send(JSON.stringify(body))
    Request.onload = function (){
        console.log(this.responseText)
    }
    return Request.responseText
}