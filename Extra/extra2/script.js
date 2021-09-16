function buscar(){
    var ntxt = window.document.querySelector('input#ntxt')
    var nvalue = Number(ntxt.value)
    var engrenagem = 1
    var tab = window.document.querySelector('select#tab')
    tab.innerHTML = ''
    var ate = window.document.querySelector('input#atxt')
    var atv = Number(ate.value)

    while (engrenagem <= atv){
        var mult = Number(engrenagem * nvalue)
        var item = window.document.createElement('option')
        item.innerHTML += `${nvalue} x ${engrenagem} = ${mult}`
        tab.appendChild(item)
        engrenagem++
    }
}
