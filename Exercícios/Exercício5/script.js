var num = window.document.querySelector('input#ntxt')
var salvo = []
var total = window.document.querySelector('div#total')
var maior = window.document.querySelector('div#maior')
var menor = window.document.querySelector('div#menor')
var somar = window.document.querySelector('div#somar')
var media = window.document.querySelector('div#media')

    function inLista(n,l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }
    }

    function adicionar(){
        var numval = [Number(num.value)]
        
        if (numval < 1 || numval >100 || inLista(numval, salvo) ){
            window.alert('Número inválido!')
        } else {
            
            salvo.push(Number(numval))
            var tab = window.document.querySelector('select#tab')
            var item = window.document.createElement('option')
            tab.appendChild(item)  
            item.innerHTML += `${numval}` //escrever na tabela
            

        }
        
    }
    function finalizar(){
        salvo.sort((a, b) => a+b)
        maior.innerHTML = `O maior valor é o ${salvo[0]}`
        var soma = salvo.reduce((a, b) => a+b)
        somar.innerHTML = `A soma dos números é igual a ${soma}`
        salvo.sort((a, b) => a-b)
        menor.innerHTML = `O menor número é o ${salvo[0]}`
        total.innerHTML = `Ao todo, temos ${salvo.length} números cadastrados`
        somar.innerHTML = `A soma dos números é igual a ${soma}`
        media.innerHTML = `A media entre os números é igual ${soma/salvo.length}`
    
    }












    /*var tab = window.document.querySelector('select#tab')
    tab.innerHTML = ''
    var item = window.document.createElement('option')
    item.innerHTML += ``
    tab.appendChild(item)*/
        

