var num = window.document.querySelector('input#ntxt')
var salvo = []

function inLista(n,l){
    if(l.indexOf(Number(n)) == -1){
        return true
    }
}

if (inLista(num.value, salvo)){
    window.alert('[ERRO] Número repetido!')
}