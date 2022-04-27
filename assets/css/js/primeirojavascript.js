function exibirMensagensDeBoasVindas(){
    console.log("Boa noite galera de LDS =D");
    console.warn("Mensagem de warning"); 
    console.warn("Mensagem de erro");
    console.warn("Mensagem de info");
}

function alterarTipoPagina(){
    //vai navegar no Dom em busca de um elemento com id titulo-pagina
    let elemento = document.getElementById("titulo-pagina");
    elemento.innerHTML = "Titulo da pagina foi alterado =D"; 
}

exibirMensagensDeBoasVindas();
alterarTipoPagina();